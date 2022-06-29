// kata - https://www.codewars.com/kata/57fb44a12b53146fe1000136

function balance(left, right) {
  const getValue = (symbol) => (symbol === '!' ? 2 : symbol === '?' ? 3 : 0);
  const leftSum = [...left].reduce((acc, x) => (acc += getValue(x)), 0);
  const rightSum = [...right].reduce((acc, x) => (acc += getValue(x)), 0);
  return leftSum > rightSum ? 'Left' : rightSum > leftSum ? 'Right' : 'Balance';
}

console.log(balance('!!', '??'), 'Right');
console.log(balance('!??', '?!!'), 'Left');
console.log(balance('!?!!', '?!?'), 'Left');
console.log(balance('!!???!????', '??!!?!!!!!!!'), 'Balance');
