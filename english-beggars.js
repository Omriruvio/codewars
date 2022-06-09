// kata - https://www.codewars.com/kata/59590976838112bfea0000fa

// Input - array - values, n - integer
// Ouput - array of sums grabbed by each beggar in turns

function beggars(values, n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    let beggarSum = 0;
    for (let current = i - 1; current < values.length; current += n) {
      beggarSum += values[current];
    }
    results.push(beggarSum);
  }
  return results;
}

console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);
