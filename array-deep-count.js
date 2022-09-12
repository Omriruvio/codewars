// kata - https://www.codewars.com/kata/596f72bbe7cd7296d1000029

const deepCount = (arr) => {
  return arr.reduce((total, x) => {
    return (total += Array.isArray(x) ? deepCount(x) + 1 : 1);
  }, 0);
};

console.log(deepCount([]), 0, 'Expected 0');
console.log(deepCount([1, 2, 3]), 3, 'Expected 3');
console.log(deepCount(['x', 'y', ['z']]), 4, 'Expected 4');
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, 'Expected 7');
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, 'Expected 8');
