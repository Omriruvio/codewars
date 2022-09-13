// kata - https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

const solve = (arr) => {
  const hash = {};
  for (const item of arr) hash[item] = hash[item] ? ++hash[item] : 1;
  return arr.sort((a, b) => (hash[a] === hash[b] ? a - b : hash[b] - hash[a]));
};

const Test = require('assert').deepEqual;
console.log(Test(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9]));
console.log(Test(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]), [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]));
console.log(Test(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]), [9, 9, 9, 9, 4, 4, 5, 5, 6, 6]));
console.log(Test(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]));
console.log(Test(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]), [0, 0, 4, 4, 9, 9, 3, 5, 7, 8]));
