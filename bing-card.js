// kata - https://www.codewars.com/kata/566d5e2e57d8fae53c00000c

const getCard = () => {
  const columnLetters = 'BINGO'.split('');
  const rowLengths = [5, 5, 4, 5, 5];
  const rowsMax = [15, 30, 45, 60, 75];
  const card = [];
  const usedNumbers = new Set();

  for (let i = 0; i < columnLetters.length; i++) {
    const row = [];
    const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let j = 0; j < rowLengths[i]; j++) {
      let randomNumber = randomNumberBetween(rowsMax[i - 1] + 1 || 1, rowsMax[i]);
      while (usedNumbers.has(randomNumber)) {
        randomNumber = randomNumberBetween(rowsMax[i - 1] + 1 || 1, rowsMax[i]);
      }
      usedNumbers.add(randomNumber);
      row.push(`${columnLetters[i]}${randomNumber}`);
    }
    card.push(row);
  }

  return [].concat(...card);
};

console.log(getCard());
