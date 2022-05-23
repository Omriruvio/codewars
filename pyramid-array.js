// kata - https://www.codewars.com/kata/515f51d438015969f7000013

// Input - n, length of returned array
// Output - Array of length n, containing arrays of length i, containing 1s

const pyramid = (n) => Array.from({ length: n }, (x, i) => Array.from({ length: i + 1 }, (x) => 1));

console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]);
