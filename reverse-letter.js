// kata - https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/

const reverseLetter = (str) => {
  return str
    .replace(/\W|\d|_/g, '')
    .split('')
    .reverse()
    .join('');
};

const Test = {};
Test.assertEquals = require('assert').deepEqual;
Test.assertEquals(reverseLetter('krishan'), 'nahsirk');
Test.assertEquals(reverseLetter('ultr53o?n'), 'nortlu');
Test.assertEquals(reverseLetter('ab23c'), 'cba');
Test.assertEquals(reverseLetter('krish21an'), 'nahsirk');
