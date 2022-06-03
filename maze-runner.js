// kata - https://www.codewars.com/kata/58663693b359c4a6560001d6

// Input - 1. 2D array representing a maze
// Input - Each item in the array is either [0,1,2,3]:
// Input - 0 - safe, 1 - wall, 2 - start, 3 - finish
//          maze = [[1,1,1,1,1,1,1],
//                  [1,0,0,0,0,0,3],
//                  [1,0,1,0,1,0,1],
//                  [0,0,1,0,0,0,1],
//                  [1,0,1,0,1,0,1],
//                  [1,0,0,0,0,0,1],
//                  [1,2,1,0,1,0,1]]
// Input - 2. Array of directions
// Input - direction = ["N","N","N","N","N","E","E","E","E","E"]

// Output - String representing result - "Dead", "Finish" or "Lost".
// Output - Hitting a wall, outside boundries = Deadge.
// Output - Reach end point = Finish.
// Output - Out of moves = Lost.

const mazeRunner = (maze, directions) => {
  const mazeOne = new Maze(maze);
  const playerOne = new Player(mazeOne.startPoint);
  for (const direction of directions) {
    const nextRoom = playerOne.getNextRoom(direction);
    playerOne.setPosition(nextRoom);
    playerOne.status = mazeOne.processPosition(playerOne.currentPosition);
    if (!playerOne.status.active) return playerOne.status.message;
  }
  return 'Lost';
};

class Maze {
  constructor(maze) {
    this._maze = maze;
    this._finishPoint = [];
    this._walls = [];
    this._safeRooms = [];
    this._startPoint = [];
    this._processMaze();
  }

  get startPoint() {
    return this._startPoint;
  }

  _processMaze() {
    let x = 0;
    let y = 0;
    while (this._maze[x]) {
      while (this._maze[y]) {
        const roomValue = this._maze[x][y];
        const roomType =
          roomValue === 0 ? 'safeRooms' : roomValue === 1 ? 'walls' : roomValue === 2 ? 'startPoint' : roomValue === 3 ? 'finishPoint' : 'unknown';
        this[`_${roomType}`].push([x, y]);
        y++;
      }
      y = 0;
      x++;
    }
    this._startPoint = JSON.stringify(this._startPoint[0]);
    this._finishPoint = JSON.stringify(this._finishPoint[0]);
    this._walls = JSON.stringify(this._walls);
    this._safeRooms = JSON.stringify(this._safeRooms);
  }

  processPosition([x, y]) {
    const outOfBounds = x > this._maze.length || y > this._maze.length || y < 0 || x < 0;
    switch (true) {
      case outOfBounds:
        return { active: false, message: 'Dead' };
      case this._walls.includes([x, y]):
        return { active: false, message: 'Dead' };
      case this._safeRooms.includes([x, y]):
        return { active: true, message: 'Safe' };
      case this._finishPoint.includes([x, y]):
        return { active: false, message: 'Finish' };
      case this._startPoint.includes([x, y]):
        return { active: true, message: 'Safe' };
      default:
        return { active: false, message: 'Dead' };
    }
  }
}

class Player {
  constructor(startingPosition) {
    this._startPosition = JSON.parse(startingPosition);
    this._currentPosition = JSON.parse(startingPosition);
    this._status = {};
  }

  setPosition([x, y]) {
    this._currentPosition = [x, y];
  }

  set status(status) {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  getNextRoom(direction) {
    const movement = {
      N: [-1, 0],
      W: [0, -1],
      S: [1, 0],
      E: [0, 1],
    };
    const [currentX, currentY] = this._currentPosition;
    const [currentDirectionX, currentDirectionY] = movement[direction];
    return [currentX + currentDirectionX, currentY + currentDirectionY];
  }

  get currentPosition() {
    return this._currentPosition;
  }
}

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']), 'Finish', 'Expected Finish');
console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E']), 'Finish', 'Expected Finish');
console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']), 'Finish', 'Expected Finish');
console.log(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W']), 'Dead', 'Expected Dead');
console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S']), 'Dead', 'Expected Dead');
console.log(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E']), 'Lost', 'Expected Lost');
