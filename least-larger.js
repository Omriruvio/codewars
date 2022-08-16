// kata - https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

// input - array & index
// output - smallest number that is larger than the element at the ith index

const leastLarger = (arr, i) => {
  return arr.reduce(
    (result, num, j) => {
      if (num > arr[i] && num < result.num) {
        result.num = num;
        result.index = j;
      }
      return result;
    },
    { num: Infinity, index: -1 }
  ).index;
};

it('Should find the smallest number that is larger than the one in the ith index', () => {
  expect(leastLarger([4, 1, 3, 5, 6], 0)).toBe(3);
  expect(leastLarger([4, 1, 3, 5, 6], 4)).toBe(-1);
  expect(leastLarger([1, 3, 5, 2, 4], 0)).toBe(3);
});
