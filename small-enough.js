// kata - https://www.codewars.com/kata/57cc981a58da9e302a000214/

const smallEnough = (arr, limit) => {
  return arr.every((x) => x <= limit);
};

const assert = require('assert');
assert.strictEqual(smallEnough([66, 101], 200), true);
assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
