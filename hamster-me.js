const hamsterMe = (code, message) => {
  const codehash = new Map();
  const missing = Array.from({ length: code[0].charCodeAt(0) - 97 }, (x, i) => String.fromCharCode(i + 97));
  const splitCode = code.split('');

  for (let i = 0; i < splitCode.length; i++) {
    const letter = splitCode[i];
    const nextLetter = splitCode[i + 1] || String.fromCharCode(97 + 26);
    const currentArray = Array.from({ length: nextLetter.charCodeAt(0) - letter.charCodeAt(0) }, (x, i) =>
      String.fromCharCode(letter.charCodeAt(0) + i)
    );
    codehash.set(letter, currentArray);
  }

  [...codehash][codehash.size - 1][1].push(...missing);

  const getLetterHash = (letter) => {
    for (const [key, hashList] of codehash) {
      let letterIndex = hashList.indexOf(letter);
      if (letterIndex !== -1) {
        return { parent: key, index: letterIndex + 1 };
      }
    }
  };

  return [...message]
    .map((x) => {
      const { parent, index } = getLetterHash(x);
      return `${parent}${index}`;
    })
    .join('');
};

console.log(hamsterMe('hamster', 'hamster'), 'h1a1m1s1t1e1r1');
console.log(hamsterMe('hamster', 'helpme'), 'h1e1h5m4m1e1');
console.log(hamsterMe('hmster', 'hamster'), 'h1t8m1s1t1e1r1', 'Lack of letter in the code?');
console.log(hamsterMe('hhhhammmstteree', 'hamster'), 'h1a1m1s1t1e1r1', 'Duplication of letters in code?');
console.log(hamsterMe('hamster', 'abcdefghijklmnopqrstuvwxyz'), 'a1a2a3a4e1e2e3h1h2h3h4h5m1m2m3m4m5r1s1t1t2t3t4t5t6t7');
console.log(
  hamsterMe('f', 'abcdefghijklmnopqrstuvwxyz'),
  'f22f23f24f25f26f1f2f3f4f5f6f7f8f9f10f11f12f13f14f15f16f17f18f19f20f21',
  'One letter code ?'
);
