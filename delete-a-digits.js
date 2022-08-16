// kata - https://www.codewars.com/kata/5894318275f2c75695000146

// input - integer n
// output - highest number after removing a single digit

const deleteDigit = (n) => {
  return [...String(n)].reduce((highest, x, i, arr) => {
    const currentNum = +arr
      .slice(0, i)
      .concat(arr.slice(i + 1))
      .join('');
    if (currentNum > highest) {
      highest = currentNum;
    }
    return highest;
  }, -Infinity);
};

console.log(deleteDigit(152), 52);
console.log(deleteDigit(1001), 101);
console.log(deleteDigit(321), 32);
console.log(deleteDigit(123), 23);
console.log(deleteDigit(1230), 230);
console.log(deleteDigit(2130), 230);
console.log(deleteDigit(2330), 330);
