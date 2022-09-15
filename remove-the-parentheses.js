// kata - https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

const removeParentheses = (str) => {
  let isOpen = 0;
  return [...str].reduce((result, x) => {
    if (x === '(' || x === ')') {
      if (x === '(') isOpen++;
      if (x === ')') isOpen--;
      return result;
    }
    if (isOpen) return result;
    return result + x;
  }, '');
};

const assert = require('assert');
assert.strictEqual(removeParentheses('example(unwanted thing)example'), 'exampleexample');
assert.strictEqual(removeParentheses('example (unwanted thing) example'), 'example  example');
assert.strictEqual(removeParentheses('a (bc d)e'), 'a e');
assert.strictEqual(removeParentheses('a(b(c))'), 'a');
assert.strictEqual(removeParentheses('hello example (words(more words) here) something'), 'hello example  something');
assert.strictEqual(removeParentheses('(first group) (second group) (third group)'), '  ');
