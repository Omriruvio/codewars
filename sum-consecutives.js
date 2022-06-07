// kata - https://www.codewars.com/kata/55eeddff3f64c954c2000059

// Input - array of integers
// Ouput - array with equal consecutives summed, the rest remain the same

const sumConsecutives = (arr) => {
  let sum = 0;
  return arr.reduce((acc, current, i) => {
    if (arr[i + 1] !== current) {
      acc.push(sum !== 0 ? sum + current : current);
      sum = 0;
    } else sum += current;
    return acc;
  }, []);
};

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1]);
console.log(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3]);
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0]);
console.log(sumConsecutives([3, 3, 3, 3, 1]), [12, 1]);
