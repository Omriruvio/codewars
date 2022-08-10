class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }

  addEdge(v, w) {
    this.adjacent[v].push(w);
    this.adjacent[w].push(v);
    this.edges++;
  }

  bfs(goal, root = this.vertices[0]) {
    let adj = this.adjacent;

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    const edges = new Map();
    edges.set(root, 0);

    const predecessors = [];
    predecessors[root] = null;

    const buildPath = (goal, root, predecessors) => {
      const stack = [];
      stack.push(goal);

      let u = predecessors[goal];

      while (u != root) {
        stack.push(u);
        u = predecessors[u];
      }

      stack.push(root);

      let path = stack.reverse().join('-');

      return path;
    };

    while (queue.length) {
      const current = queue.shift();

      if (current === goal) {
        return {
          distance: edges.get(goal),
          path: buildPath(goal, root, predecessors),
        };
      }

      for (const next of adj[current]) {
        if (!discovered[next]) {
          discovered[next] = true;
          queue.push(next);
          edges.set(next, edges.get(current) + 1);
          predecessors[next] = current;
        }
      }
    }

    return false;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('B', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'F');
g.addEdge('F', 'G');

console.log(g.bfs('E', 'A'));
