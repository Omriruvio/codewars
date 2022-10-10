// kata - https://www.codewars.com/kata/5800580f8f7ddaea13000025

const sumTheTreeValues = (root) => {
  if (!root) return;
  if (!root.left && !root.right) return root.value;
  let sum = root.value;

  if (root.left) sum += sumTheTreeValues(root.left);
  if (root.right) sum += sumTheTreeValues(root.right);

  return sum;
};

const Test = {};
Test.assertEquals = require('assert').deepEqual;
var simpleNode = { value: 10, left: { value: 1, left: null, right: null }, right: { value: 2, left: null, right: null } };
Test.assertEquals(sumTheTreeValues(simpleNode), 13);

var unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
};
Test.assertEquals(sumTheTreeValues(unbalancedNode), 12);
