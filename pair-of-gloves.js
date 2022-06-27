// kata - https://www.codewars.com/kata/58235a167a8cb37e1a0000db

// Input - array of strings / glove colors
// Output - integer / count of maximum possible pairs of any color

const numberOfPairs = (gloves) => {
  const seen = new Set();
  return gloves.reduce((acc, glove) => {
    if (seen.has(glove)) {
      acc++;
      seen.delete(glove);
    } else seen.add(glove);
    return acc;
  }, 0);
};

console.log(numberOfPairs(['red', 'red', 'blue']), 1);
console.log(numberOfPairs(['red', 'red', 'blue', 'blue']), 2);
console.log(numberOfPairs(['blue', 'red', 'blue', 'blue']), 1);
console.log(numberOfPairs(['blue', 'red', 'blue', 'blue', 'red']), 2);
