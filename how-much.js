// kata - https://www.codewars.com/kata/55b4d87a3766d9873a0000d4

const howMuch = (m, n) => {
  const list1 = [];
  for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
    const list2 = [];
    if (i % 7 === 2 && i % 9 === 1) {
      list2.push(`M: ${i}`);
      list2.push(`B: ${Math.floor(i / 7)}`);
      list2.push(`C: ${Math.floor(i / 9)}`);
    }
    if (list2.length !== 0) {
      list1.push(list2);
    }
  }
  return list1;
};

const assert = require('assert');
assert.deepEqual(howMuch(1, 100), [
  ['M: 37', 'B: 5', 'C: 4'],
  ['M: 100', 'B: 14', 'C: 11'],
]);
assert.deepEqual(howMuch(2950, 2950), []);
