// kata - https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

// Input - t - max distance k - max destinations ls - lists of distances
// Ouput - highest sum of k or less distances

function chooseBestSum(t, k, ls) {
  const getCombinations = (arr, k) => {
    if (k > arr.length || k <= 0) return [];
    if (k === arr.length) return [arr];
    if (k === 1) return arr.map((x) => [x]);

    const combs = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
      const head = [arr[i]];
      const tail = getCombinations(arr.slice(i + 1), k - 1);
      for (let j = 0; j < tail.length; j++) {
        combs.push(head.concat(tail[j]));
      }
    }
    return combs;
  };
  const combinations = getCombinations(ls, k);

  let highest = null;
  for (const combination of combinations) {
    let current = combination.reduce((a, b) => a + b, 0);
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
