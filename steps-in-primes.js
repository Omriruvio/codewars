// kata - https://www.codewars.com/kata/5613d06cee1e7da6d5000055

// Input - g - step, m - start, n - end (all integers)
// Ouput - the first prime pair with a step of g in range

const isPrime = (x) => {
  for (let i = 2; i < Math.sqrt(x) + 1; i++) {
    if (x % i === 0) return false;
  }
  return true;
};
const step = (g, m, n) => {
  for (let i = m + g; i <= n; i++) {
    if (isPrime(i) && isPrime(i - g)) return [i - g, i];
  }
  return null;
};

console.log(step(2, 100, 110), [101, 103]);
console.log(step(4, 100, 110), [103, 107]);
console.log(step(6, 100, 110), [101, 107]);
console.log(step(8, 300, 400), [359, 367]);
console.log(step(10, 300, 400), [307, 317]);
