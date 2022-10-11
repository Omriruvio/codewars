// kata - https://www.codewars.com/kata/5254bd1357d59fbbe90001ec

const getScore = (n) => 25 * n * (n + 1);

const assert = require('assert');
assert.strictEqual(getScore(1), 50);
assert.strictEqual(getScore(2), 150);
assert.strictEqual(getScore(3), 300);
assert.strictEqual(getScore(4), 500);
assert.strictEqual(getScore(5), 750);
