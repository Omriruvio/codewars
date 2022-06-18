// kata - https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
  return !Number.isInteger(Math.sqrt(sq)) ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);
console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);

console.log(Math.sqrt(121))