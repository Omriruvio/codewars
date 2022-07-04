// kata - https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = function (busStops) {
  return busStops.reduce((acc, x) => {
    acc += x[0] - x[1];
    return acc;
  }, 0);
};

// prettier-ignore
console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
// prettier-ignore
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
// prettier-ignore
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
// prettier-ignore
console.log(number([[0,0]]),0);
