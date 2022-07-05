// kata - https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  const result = [];
  for (let i = 2; i < Math.floor(integer / 2); i++) {
    if (integer % i === 0) result.push(i);
  }
  return result.length === 0 ? `${integer} is prime` : result;
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");