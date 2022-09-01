// kata - https://www.codewars.com/kata/5a946d9fba1bb5135100007c

function minimumNumber(numbers) {
  const isPrime = (n) => {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const nextPrime = (n) => {
    let count = 0;
    for (let i = n; !isPrime(n++); i++) count++;
    return count;
  };
  return nextPrime(numbers.reduce((a, b) => a + b));
}
