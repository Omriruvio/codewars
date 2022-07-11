//www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  return arr.reduce(
    ([min, max], x) => {
      if (x <= min) min = x;
      if (x >= max) max = x;
      return [min, max];
    },
    [Infinity, 0]
  );
}

console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([5, 7, 3, 4, 5]), [3, 7]);
