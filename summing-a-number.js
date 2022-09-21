// kata - https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = (n) => {
  return +[...String(Math.abs(n))].reduce((a, b) => +a + +b);
};

const assert = require('assert');
assert.strictEqual(sumDigits(10), 1);
assert.strictEqual(sumDigits(99), 18);
assert.strictEqual(sumDigits(-32), 5);
