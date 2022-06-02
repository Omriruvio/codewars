// kata - https://www.codewars.com/kata/58d76854024c72c3e20000de

// Input - String of words
// Output - Return the string with every other word flipped in place.
// punctuation marks should  be considered as a part of the word

const reverse = (str) => {
  const flip = (str) => [...str].reverse().join('');
  return str
    .split(' ')
    .map((x, i) => (i % 2 === 0 ? x : flip(x)))
    .join(' ')
    .trim();
};

console.log(reverse('Reverse this string, please!'), 'Reverse siht string, !esaelp');
console.log(reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts");
