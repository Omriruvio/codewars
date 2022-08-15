// kata - https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

// input - array & index
// output - smallest number that is larger than the element at the ith index

function leastLarger(arr, i) {
  const current = arr[i];
  const result = arr.filter((x) => x > current);
  const sorted = result.sort((a, b) => a - b);
  if (sorted.length === 0) return -1;
  return arr.findIndex((x) => x === sorted[0]);
}

// console.log(leastLarger([1, 3, 5, 2, 4], 0));

it('Should find the smallest number that is larger than the one in the ith index', () => {
  expect(leastLarger([4, 1, 3, 5, 6], 0)).toBe(3);
  expect(leastLarger([4, 1, 3, 5, 6], 4)).toBe(-1);
  expect(leastLarger([1, 3, 5, 2, 4], 0)).toBe(3);
});
