// kata - https://www.codewars.com/kata/53907ac3cd51b69f790006c5

// if all angles are less than 90°, return 1.
// if one angle is exactly 90°, return 2.
// if one angle is greater than 90°, return 3.
// if three sides cannot form a triangle or one angle is 180° (which turns it into a line), return 0.
// triangleType(3, 4, 5) should return 2;

const triangleType = (a, b, c) => {
  const angles = [a, b, c].sort((x, y) => x - y);
  if (angles[0] + angles[1] <= angles[2]) return 0;
  if (angles[0] ** 2 + angles[1] ** 2 === angles[2] ** 2) return 2;
  if (angles[0] ** 2 + angles[1] ** 2 < angles[2] ** 2) return 3;
  return 1;
};

const assert = require('assert');
const Test = {
  assertEquals: assert.strictEqual,
};

Test.assertEquals(triangleType(7, 3, 2), 0); // Not triangle
Test.assertEquals(triangleType(2, 4, 6), 0); // Not triangle
Test.assertEquals(triangleType(8, 5, 7), 1); // Acute
Test.assertEquals(triangleType(3, 4, 5), 2); // Right
Test.assertEquals(triangleType(7, 12, 8), 3); // Obtuse
