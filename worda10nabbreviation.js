// kata - https://www.codewars.com/kata/5375f921003bf62192000746

// Input - string containing words
// Output - abbreviated string

const abbreviate = (str) => {
  const replacer = (word) => `${word.slice(0, 1)}${word.length - 2}${word.slice(-1)}`;
  return str.replace(/[a-zA-Z]{4,}/g, replacer);
};

console.log(abbreviate('internationalization'), 'i18n');
console.log(abbreviate('accessibility'), 'a11y');
console.log(abbreviate('Accessibility'), 'A11y');
console.log(abbreviate('elephant-ride'), 'e6t-r2e');
