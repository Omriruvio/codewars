// kata - https://www.codewars.com/kata/559536379512a64472000053

// P - Input - receive string with any symbol
// R - Output - return passphrased string

const playPass = (str, n) => {
  const digReplace = (n) => 9 - n;
  const funkyCase = (arr) => arr.map((x, i) => (typeof x === 'string' ? (i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()) : x));
  const circuShift = (char, n) => {
    const code = char.toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + n) % 26) + 97);
    return char;
  };
  return funkyCase(
    [...str].map((x) => {
      return x === ' ' ? x : !isNaN(+x) ? digReplace(x) : x !== '' ? circuShift(x, n) : x;
    })
  )
    .reverse()
    .join('');
};
console.log(playPass('I LOVE YOU!!!', 1), '!!!vPz fWpM J');
