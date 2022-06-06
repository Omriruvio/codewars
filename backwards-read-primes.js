// kata - https://www.codewars.com/kata/5539fecef69c483c5a000015

// input - min / max - inclusive range for scan
// output - array of primes that when reversed also produce a prime number

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function reverseNum(num) {
  return String(num).split('').reverse().join('');
}

const backwardsPrime = (min, max) => {
  const results = [];
  for (let i = min; i <= max; i++) {
    const reversedNum = reverseNum(i);
    +reversedNum !== i && isPrime(i) && isPrime(reversedNum) && results.push(i);
  }
  return results;
};

console.log(backwardsPrime(9900, 10000), [9923, 9931, 9941, 9967]);
console.log(backwardsPrime(70000, 70241), [70001, 70009, 70061, 70079, 70121, 70141, 70163, 70241]);
