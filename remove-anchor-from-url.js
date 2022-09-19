// kata - https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url) {
  return url.split('#')[0];
}

const assert = require('assert');
assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');
