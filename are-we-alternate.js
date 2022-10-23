// kata - https://www.codewars.com/kata/59325dc15dbb44b2440000af

const isAlt = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstIsVowel = vowels.includes(word[0]);
  return [...word].every((letter, index) => {
    const isVowel = vowels.includes(letter);
    const isEven = index % 2 === 0;
    return firstIsVowel ? isVowel === isEven : isVowel !== isEven;
  });
};
