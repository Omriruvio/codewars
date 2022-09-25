// kata - https://www.codewars.com/kata/5b180e9fedaa564a7000009a

const solve = (s) => {
  const upperCaseCount = [...s].reduce((count, x) => (count += x.toUpperCase() === x ? 1 : 0), 0);
  if (upperCaseCount > s.length / 2) return s.toUpperCase();
  if (upperCaseCount === s.length / 2) return s.toLowerCase();
  return s.toLowerCase();
};

const Test = {};
Test.assertEquals = require('assert').deepEqual;
Test.assertEquals(solve('code'), 'code');
Test.assertEquals(solve('CODe'), 'CODE');
Test.assertEquals(solve('COde'), 'code');
Test.assertEquals(solve('Code'), 'code');
