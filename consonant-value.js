// Kata - https://www.codewars.com/kata/59c633e7dcc4053512000073

// P - Input lowercase string of alphabetical chars
// R - Output value of highest consonant substring

const solve = (s) => {
  return Math.max(
    ...s
      .replace(/[aeiou]+/gi, ' ')
      .split(' ')
      .reduce((result, x) => {
        result.push([...x].reduce((acc, y) => (acc += y.charCodeAt(0) - 96), 0));
        return result;
      }, [])
  );
};

console.log(solve('zodiac'), 26);
console.log(solve('chruschtschov'), 80);
console.log(solve('khrushchev'), 38);
console.log(solve('strength'), 57);
console.log(solve('catchphrase'), 73);
console.log(solve('twelfthstreet'), 103);
console.log(solve('mischtschenkoana'), 80);
