// kata - https://www.codewars.com/kata/581e014b55f2c52bb00000f8

const decipherThis = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const splitWord = [...word];
      const intLength = String(parseInt(word)).length;
      const charCode = +splitWord.splice(0, intLength).join('');
      const head = String.fromCharCode(charCode);
      [splitWord[0], splitWord[splitWord.length - 1]] = [splitWord[splitWord.length - 1], splitWord[0]];
      return head + splitWord.join('');
    })
    .join(' ');
};

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
// console.log(decipherThis('hello'), 'Have a go at this and see how you do');
