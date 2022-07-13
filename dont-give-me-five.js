// kata - https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (![...String(i)].includes('5')) count++;
  }

  return count;
}

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
