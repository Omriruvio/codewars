function upArray(arr) {
  if (arr.length > 0 && arr.every((x) => x >= 0)) {
    if (arr[arr.length - 1] !== 9) {
      arr.push(+arr.pop() + 1);
    } else {
      arr[arr.length - 1] = 0;
      arr[arr.length - 2]++;
    }
    return arr;
  }
  return null;
}

console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);
console.log(upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 1, 2, 3, 4, 5, 6, 8]);
