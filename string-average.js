// kata - https://www.codewars.com/kata/5966847f4025872c7d00015b

function averageString(str) {
  const strToNum = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
  const numToStr = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
  const split = str.split(' ');
  return (
    numToStr[
      Math.floor(
        split.reduce((sum, x, i) => {
          sum += strToNum[x];
          count = i;
          return sum;
        }, 0) / split.length
      )
    ] || 'n/a'
  );
}

console.log(averageString('zero nine five two'), 'four');
console.log(averageString('four six two three'), 'three');
console.log(averageString('one two three four five'), 'three');
console.log(averageString('five four'), 'four');
console.log(averageString('zero zero zero zero zero'), 'zero');
console.log(averageString('one one eight one'), 'two');
console.log(averageString(''), 'n/a');
