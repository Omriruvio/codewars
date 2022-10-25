// kata - https://www.codewars.com/kata/59b401e24f98a813f9000026

// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

const computeDepth = (n) => {
  let depth = 0;
  let digits = new Set();
  let num = n;
  while (digits.size < 10) {
    [...String(num)].forEach((digit) => digits.add(digit));
    num += n;
    depth++;
  }
  return depth;
};

console.log(computeDepth(1), 10);
console.log(computeDepth(42), 9);
