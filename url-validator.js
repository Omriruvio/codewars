const urlValidator = (value) => {
  const regex = /^https?:\/\/[www.]?[a-zA-Z0-9\._~:/\?%#\[\]@!$&'\(\)\*\+,;=\-]+\/?#?/;
  return regex.test(value);
};

console.log(urlValidator('http://example.com/'), true);
console.log(urlValidator('https://www.example.com/'), true);
console.log(urlValidator('http://1-example.com'), true);
console.log(urlValidator('http://example.com/go/even/deeper/'), true);
console.log(urlValidator('http://example-example-example.com '), true);
