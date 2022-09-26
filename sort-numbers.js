// kata - https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

const solution = (nums) => {
  return nums?.sort((a, b) => a - b) || [];
};

const assert = require('assert');
assert.deepEqual(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
assert.deepEqual(solution(null), []);
assert.deepEqual(solution([]), []);
assert.deepEqual(solution([20, 2, 10]), [2, 10, 20]);
assert.deepEqual(solution([2, 20, 10]), [2, 10, 20]);
