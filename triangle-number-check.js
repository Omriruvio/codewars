// kata - https://www.codewars.com/kata/557e8a141ca1f4caa70000a6

// A triangle number is a number where n objects form an equilateral triangle (it's a bit hard to explain). For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle
// 8 is not a triangle number because 8 objects do not form an equilateral triangle:

const isTriangleNumber = (num) => {
  let n = 1;
  while (num > 0) {
    num -= n;
    n++;
  }
  return num === 0;
};

const Test = require('@codewars/test-compat');
Test.assertEquals(isTriangleNumber(3), true, 'Expected true for input 3.  Got ' + isTriangleNumber(3) + '.');
Test.assertEquals(isTriangleNumber(5), false, 'Expected false for input 5.  Got ' + isTriangleNumber(5) + '.');
Test.assertEquals(isTriangleNumber('hello!'), false, "Expected false for input 'hello!'.  Got " + isTriangleNumber('hello!') + '.');
Test.assertEquals(isTriangleNumber(6.15), false, 'Expected false for input 6.15.  Got ' + isTriangleNumber(6.15) + '.');
