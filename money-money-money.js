function calculateYears(principal, interest, tax, desired) {
  let count, profit;
  for (count = 0; principal < desired; count++) {
    profit = principal * interest * (1 - tax);
    principal += profit;
  }
  return count;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);
