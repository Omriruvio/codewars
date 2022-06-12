// kata - https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(input) {
  input = Array.from(new Set(input)).sort((a, b) => a - b);
  const seen = new Set();
  const results = [];
  for (let i = 0; i < input.length; i++) {
    const needed = input[i] - 2;
    if (seen.has(needed)) results.push([needed, input[i]]);
    seen.add(input[i]);
  }
  return results;
}

// prettier-ignore
console.log(twosDifference([3,1,2,3,4]),[[1,3],[2,4]]);
// prettier-ignore
console.log(twosDifference([1,3,4,6]),[[1,3],[4,6]]);
