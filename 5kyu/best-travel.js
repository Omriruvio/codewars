// kata - https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

// Input - t - max distance k - max destinations ls - lists of distances
// Ouput - highest sum of k or less distances

function chooseBestSum(t, k, ls) {
  // get unique combinations of n length
  const getCombinations = (arr, n) => {};
  const combinations = getCombinations(ls, k);
  // get all combinations
  let highest = 0;
  for (const combination of combinations) {
    let current = getSum(combination);
    if (current > highest && current <= t) {
      highest = current;
    }
  }
  return highest;
}

var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts), 163);
ts = [50];
console.log(chooseBestSum(163, 3, ts), null);
ts = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(230, 3, ts), 228);
