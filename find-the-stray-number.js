// kata - https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
  const [a, b] = numbers.sort();
  return a !== b ? a : numbers.at(-1);
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([8, 1, 1, 1, 1, 1, 1]), 8);
