// kata - https://www.codewars.com/kata/5b4070144d7d8bbfe7000001

const numericals = (s) => {
  const cache = {};
  return [...s].reduce((result, letter) => {
    cache[letter] = cache[letter] ? ++cache[letter] : 1;
    result += cache[letter];
    return result;
  }, '');
};

const Test = {};
Test.assertEquals = require('assert').strictEqual;
Test.assertEquals(numericals('Hello, World!'), '1112111121311');
Test.assertEquals(numericals("Hello, World! It's me, JomoPipi!"), '11121111213112111131224132411122');
Test.assertEquals(numericals('hello hello'), '11121122342');
Test.assertEquals(numericals('Hello'), '11121');
Test.assertEquals(numericals('aaaaaaaaaaaa'), '123456789101112');
