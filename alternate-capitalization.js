// kata - https://www.codewars.com/kata/59cfc000aeb2844d16000075

const capitalize = (s) => {
  return [...s].reduce(
    (result, x, i) => {
      result[0] += i % 2 === 0 ? x.toUpperCase() : x;
      result[1] += i % 2 === 0 ? x : x.toUpperCase();
      return result;
    },
    ['', '']
  );
};

const Test = {};
Test.assertDeepEquals = require('assert').deepStrictEqual;
Test.assertDeepEquals(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
