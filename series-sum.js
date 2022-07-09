// kata - https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    x += 1 / (1 + i * 3);
  }
  return x.toFixed(2);
}

console.log(SeriesSum(1), '1.00');
console.log(SeriesSum(2), '1.25');
console.log(SeriesSum(3), '1.39');
console.log(SeriesSum(4), '1.49');
