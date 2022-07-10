// kata - https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  let result = [...numbers];
  result.splice(
    numbers.findIndex((x) => x === Math.min(...numbers)),
    1
  );
  return result;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], 'Wrong result for [1, 2, 3, 4, 5]');
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], 'Wrong result for [5, 3, 2, 1, 4]');
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], 'Wrong result for [2, 2, 1, 2, 1]');
console.log(removeSmallest([]), [], 'Wrong result for []');
