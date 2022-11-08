// kata - https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

/**
 * Function takes an array of functions and returns a function that is the composition of those functions in order.
 */

function compose(...funcs) {
  return function (x) {
    return funcs.reduceRight((v, f) => f(v), x);
  };
}

const assert = require('assert');
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
assert.strictEqual(compose(multTwo, addOne)(5), 12, 'compose two functions');
assert.strictEqual(compose(addOne, multTwo, addOne, addOne)(2), 9, 'compose four functions');
assert.strictEqual(compose(addOne)(3), 4, 'compose one function');
assert.strictEqual(compose()(10), 10, 'compose no functions');
