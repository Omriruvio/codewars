// kata - https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/

/**
 * It takes a number, adds up all the numbers from 1 to that number, and if any of those numbers are
 * greater than 9, it adds up the digits of that number and adds that to the sum
 * @param {number} n - the upper limit of the range to sum
 * @returns The sum of all the numbers from 1 to n.
 */
const twistedSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i > 9) {
      sum += String(i)
        .split('')
        .reduce((a, b) => +a + +b);
    } else sum += i;
  }
  return sum;
};

console.log(twistedSum(12));
