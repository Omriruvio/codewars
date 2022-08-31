// kata - https://www.codewars.com/kata/5276c18121e20900c0000235

const findNumber = (array) => {
  if (array.length === 0) return 1;
  const last = array.length + 1;
  const gaussian = (last * (last + 1)) / 2;
  const sum = array.reduce((a, b) => a + b);
  return gaussian - sum;
};

console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
console.log(findNumber([1, 2, 3, 5]), 4);
console.log(findNumber([1, 3]), 2);
console.log(findNumber([2, 3, 4]), 1);
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
console.log(findNumber([1, 2, 3]), 4);
