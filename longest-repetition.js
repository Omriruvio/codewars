// kata - https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// Input - string
// Ouput - first longest repeating character and its repetition count
// [char, reps]

const longestRepetition = (str) => {
  if (!str) return ['', 0];
  let substring = [];
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      substring.push(str[i]);
    } else {
      if (substring.length > 0) substrings.push(substring);
      substring = [str[i]];
    }
  }
  substrings.push(substring);
  const lengths = substrings.map((x) => x.length);
  const maxLength = Math.max.apply(this, lengths);
  const maxLetter = substrings.find((x) => x.length === maxLength)[0];
  return [maxLetter, maxLength];
};

console.log(longestRepetition('aaaabb'), ['a', 4]);
console.log(longestRepetition('bbbaaabaaaa'), ['a', 4]);
console.log(longestRepetition('cbdeuuu900'), ['u', 3]);
console.log(longestRepetition('abbbbb'), ['b', 5]);
console.log(longestRepetition('aabb'), ['a', 2]);
console.log(longestRepetition('aacddbb'), ['a', 2]);
console.log(longestRepetition(''), ['', 0]);
console.log(longestRepetition('ba'), ['b', 1]);
