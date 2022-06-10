// kata - https://www.codewars.com/kata/5274d9d3ebc3030802000165/

const nbrOfLaps = (a, b) => {
  if (a === b) return [1, 1];
  let resX, resY;
  for (let i = 1; (i * a) % b !== 0; i++) resX = i;
  for (let i = 1; (i * b) % a !== 0; i++) resY = i;
  return [resX + 1, resY + 1];
};

console.log(nbrOfLaps(5, 3), [3, 5]);
console.log(nbrOfLaps(4, 6), [3, 2]);
console.log(nbrOfLaps(5, 5), [1, 1]);
