// kata - https://www.codewars.com/kata/5a3dd29055519e23ec000074

const checkExam = (arr1, arr2) => {
  const result = arr2.reduce((result, x, i) => {
    if (!x) return result;
    if (x === arr1[i]) return result + 4;
    if (x !== arr1[i]) return result - 1;
  }, 0);
  return result < 0 ? 0 : result;
};

const assert = require('assert');
assert.strictEqual(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
assert.strictEqual(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
assert.strictEqual(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
assert.strictEqual(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
