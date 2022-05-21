// kata - https://www.codewars.com/kata/5853213063adbd1b9b0000be

// P - Input - fighers array 6x2 strings, position [x, y] array, moves array [up, down, left, right]
// R - Output - Array of fighters that were hovered, horizontal only modulus allowed

function streetFighterSelection(fighters, position, moves) {
  const fxl = fighters[0].length; // fighters x length
  const fyl = fighters.length; // fighers y length
  let [x, y] = position;
  const directions = {
    up: ([x, y]) => [x, y - 1 < 0 ? 0 : y - 1],
    down: ([x, y]) => [x, y + 1 > fyl - 1 ? fyl - 1 : y + 1],
    left: ([x, y]) => [(x - 1 + fxl) % fxl, y],
    right: ([x, y]) => [(x + 1) % fxl, y],
  };
  const selected = [];
  for (const move of moves) {
    [x, y] = directions[move]([x, y]);
    selected.push(fighters[y][x]);
  }
  return selected;
}

fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
let moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
moves = [];
console.log(streetFighterSelection(fighters, [0, 0], moves), []);
moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
moves = ['down', 'down', 'down', 'down'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
moves = ['up', 'up', 'up', 'up'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
