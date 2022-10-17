// kata - https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.match(/[a-zA-Z]/)) {
        return word.slice(1) + word[0] + 'ay';
      } else {
        return word;
      }
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');
