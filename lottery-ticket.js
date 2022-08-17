// kata - https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

const bingo = (ticket, win) => {
  let currentWins = 0;
  ticket: for (const section of ticket) {
    const [letters, number] = section;
    const isWin = [...letters].some((letter) => letter.charCodeAt(0) === number);
    if (isWin) {
      currentWins++;
      continue ticket;
    }
  }
  return currentWins >= win ? 'Winner!' : 'Loser!';
};

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  ),
  'Loser!'
);
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  ),
  'Winner!'
);
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  ),
  'Loser!'
);
