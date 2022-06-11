// kata - https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

// Input - n, positive
// Ouput - Multiplication of all primes up to n

const isPrime = (n) => {
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const getNextPrime = (current) => {
  return isPrime(current + 1) ? current + 1 : getNextPrime(current + 1);
};

const numPrimorial = (n) => {
  // get array of all primorials
  let currentPrime = 2;
  const primes = [];
  for (let i = 0; i < n; i++) {
    primes.push(currentPrime);
    currentPrime = getNextPrime(currentPrime);
  }
  return primes.reduce((acc, x) => acc * x, 1);
};

console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);
