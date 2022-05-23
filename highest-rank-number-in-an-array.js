// kata - https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

// Input - Array of numbers
// Ouput - Most frequent item in array or highest between tied

const highestRank = (arr) => {
  const count = {};
  arr.forEach((x) => (count[x] = count[x] ? ++count[x] : 1));
  const highest = Object.values(count)
    .sort((a, b) => a - b)
    .slice(-1);
  return +Object.entries(count)
    .filter(([key, value]) => value === +highest)
    .sort((a, b) => a[0] - b[0])
    .slice(-1)[0][0];
};

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);
