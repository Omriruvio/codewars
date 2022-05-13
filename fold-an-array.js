// kata - https://www.codewars.com/kata/57ea70aa5500adfe8a000110
// P - Input is array of integers and number of folds
// R - Output is array folded n times

const foldArray = (arr, folds) => {
  const fold = (arr) => {
    const center = Math.floor(arr.length / 2);
    const folded = [];
    // run loop until length / 2 take edges, sum, push to next array
    for (let i = 0; i < center; i++) folded.push(arr[i] + arr[arr.length - 1 - i]);
    // push the remaining center item if exists
    if (arr.length % 2 !== 0) folded.push(arr[center]);
    return folded;
  };

  let result = fold(arr);
  for (let i = 1; i < folds; i++) result = fold(result);
  return result;
};

function foldArrayRecursive(array, runs) {
  if (!runs) return array;

  const result = [];
  for (let i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length - i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }

  return foldArray(result, runs - 1);
}

console.log(foldArray([1, 2, 3, 4, 5], 1), [6, 6, 3]);
console.log(foldArray([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(foldArray([1, 2, 3, 4, 5], 3), [15]);
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1), [14, 75, 0]);
