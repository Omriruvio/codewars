// kata - https://www.codewars.com/kata/539ee3b6757843632d00026b

const capitals = (word) => {
  return [...word].reduce((result, x, i) => {
    if (x.toUpperCase() === x) result = [...result, i];
    return result;
  }, []);
};

const assert = require('assert');
assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
