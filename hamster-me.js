const hamster = (code, message) => {
  const sorted = code.split('').sort().join('');
  const codehash = new Map();
  const missing = Array.from({ length: sorted[0].charCodeAt(0) - 97 }, (x, i) => String.fromCharCode(i + 97));
  for (let i = 0; i < sorted.length; i++) {
    const letter = sorted[i];
    const nextLetter = sorted[i + 1] || String.fromCharCode(97 + 26);
    const currentArray = Array.from({ length: nextLetter.charCodeAt(0) - letter.charCodeAt(0) }, (x, i) =>
      String.fromCharCode(letter.charCodeAt(0) + i)
    );
    codehash.set(letter, currentArray);
  }
  [...codehash].at(-1)[1].push(...missing);

  const getLetterHash = (letter) => {
    for (const hashList of codehash.values()) {
      console.log(hashList.indexOf(letter));
      let letterIndex = hashList.indexOf(letter);
      if (letterIndex !== -1) {
        return letterIndex + 1;
      }
    }
  };

  return [...message].map((x) => `${x}${getLetterHash(x)}`).join('');
};

hamster('hmster', 'hmster');
