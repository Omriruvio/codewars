// kata - https://www.codewars.com/kata/525d50d2037b7acd6e000534

// Input - Arrays
// Output - Extend the built in class Array with:
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

Object.assign(Array.prototype, {
  square() {return this.map((x) => Math.pow(x, 2));},
  cube() {return this.map((x) => Math.pow(x, 3));},
  sum() {return this.reduce((a, b) => a + b);},
  average() {return this.length > 0 ? this.reduce((a, b) => a + b) / this.length : NaN;},
  even() {return this.filter((x) => x % 2 === 0);},
  odd() {return this.filter((x) => x % 2 !== 0);},
});

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15, 'Wrong sum');
console.log(numbers.average(), 3, 'Wrong average');
console.log(numbers.even(), [2, 4], 'Wrong result for even()');
console.log(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');
