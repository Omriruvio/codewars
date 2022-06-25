const rowSumOddNumbers = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < i + 1; j++) {
      row.push(!arr[i - 1] ? 1 : !row[j - 1] ? +arr[i - 1].slice(-1) + 2 : row[j - 1] + 2);
    }
    arr.push(row);
  }
  return arr.slice(-1)[0].reduce((a, b) => a + b);
};

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(4), 64);
console.log(rowSumOddNumbers(5), 125);
console.log(rowSumOddNumbers(42), 74088);
