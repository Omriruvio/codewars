// kata - https://www.codewars.com/kata/583f158ea20cfcbeb400000a

/**
 * It takes two numbers and an operator as arguments, and returns the result of the operation
 * @param a - number
 * @param b - number
 * @param operator - A string of one of the following: add, subtract, multiply, divide.
 * @returns the result of the operation.
 */
function arithmetic(a, b, operator) {
  const ops = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return ops[operator](+a, +b);
}

const assert = require('assert');
assert.strictEqual(arithmetic(1, 2, 'add'), 3, "'add' should return the two numbers added together!");
assert.strictEqual(arithmetic(8, 2, 'subtract'), 6, "'subtract' should return a minus b!");
assert.strictEqual(arithmetic(5, 2, 'multiply'), 10, "'multiply' should return a multiplied by b!");
assert.strictEqual(arithmetic(8, 2, 'divide'), 4, "'divide' should return a divided by b!");
