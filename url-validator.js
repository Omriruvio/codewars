const urlValidator = (value) => {
  const regex = /^https?:\/{2}[www.]?[\w.~:/?%#[\]@!$&'()*+,;=-]+\/?#?/;
  return regex.test(value);
};

console.log(urlValidator('https://example.com/'), true);
console.log(urlValidator('https://www.example.com/'), true);
console.log(urlValidator('http://1-example.com'), true);
console.log(urlValidator('http://example.com/go/even/deeper/'), true);
console.log(urlValidator('http://example-example-example.com'), true);
