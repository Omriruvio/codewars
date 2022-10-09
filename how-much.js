// kata - https://www.codewars.com/kata/55b4d87a3766d9873a0000d4

const howMuch = (m, n) => {
  const result = [];

  const lower = Math.min(m, n);
  const higher = Math.max(m, n);
  const range = higher - lower;

  for (let i = 0; i <= range; i++) {
    const current = lower + i;
    const b = Math.floor(current / 9);
    const c = Math.floor(current / 7);
    if (current - b * 9 === c * 7) {
      result.push(['M: ' + current, 'B: ' + b, 'C: ' + c]);
    }
  }

  return result;
};

const assert = require('assert');
assert.deepEqual(howMuch(1, 100), [
  ['M: 37', 'B: 5', 'C: 4'],
  ['M: 100', 'B: 14', 'C: 11'],
]);
assert.deepEqual(howMuch(2950, 2950), []);
