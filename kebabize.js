// kata - https://www.codewars.com/kata/57f8ff867a28db569e000c4a

// Input - camel cased string
// Output - kebab cased string

const kebabize = (str) =>
  [...str]
    .map((x) => (x === x.toUpperCase() ? `-${x.toLowerCase()}` : x))
    .join('')
    .replace(/[\d-][\d]/g, '')
    .replace(/^-/, '');

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
