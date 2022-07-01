// kata - https://www.codewars.com/kata/5878520d52628a092f0002d0

// receives letter and returns opposite cased letter
const flipCase = (letter) => (letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase());

const stringTransformer = (str) =>
  str
    .split(' ')
    .reverse()
    .map((word) => [...word].map((letter) => flipCase(letter)).join(''))
    .join(' ');

console.log(stringTransformer('    Example     string   '), 'STRING eXAMPLE');
