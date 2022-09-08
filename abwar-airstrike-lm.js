// kata - https://www.codewars.com/kata/5938f5b606c3033f4700015a

const alphabetWar = (fight) => {
  const leftPower = { w: 4, p: 3, b: 2, s: 1 };
  const rightPower = { m: 4, q: 3, d: 2, z: 1 };
  const score = { left: 0, right: 0 };
  let lastLetter = '';
  for (let i = 0; i < fight.length; i++) {
    const current = fight[i];
    if (current !== '*') {
      lastLetter = current;
      score.left += leftPower[current] || 0;
      score.right += rightPower[current] || 0;
    } else {
      score.left -= leftPower[lastLetter] || 0;
      score.right -= rightPower[lastLetter] || 0;
      lastLetter = '';
      if (fight[i + 1] !== '*') i++;
    }
  }
  return score.left > score.right ? 'Left side wins!' : score.right > score.left ? 'Right side wins!' : "Let's fight again!";
};

const alphabetWar2 = (str) => {
  const arr = str.replace(/(?:.)?\*+.?/g, '').split('');
  const [left, right] = arr.reduce(
    (acc, curr) => {
      acc[0] += { w: 4, p: 3, b: 2, s: 1 }[curr] || 0;
      acc[1] += { m: 4, q: 3, d: 2, z: 1 }[curr] || 0;
      return acc;
    },
    [0, 0]
  );

  return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : "Let's fight again!";
};

console.log(alphabetWar('z'), 'Right side wins!');
console.log(alphabetWar('yqz**pv*m*y'), 'Right side wins!');
console.log(alphabetWar('****'), "Let's fight again!");
console.log(alphabetWar('z*dq*mw*pb*s'), "Let's fight again!");
console.log(alphabetWar('zdqmwpbs'), "Let's fight again!");
console.log(alphabetWar('zz*zzs'), 'Right side wins!');
console.log(alphabetWar('sz**z**zs'), 'Left side wins!');
console.log(alphabetWar('z*z*z*zs'), 'Left side wins!');
console.log(alphabetWar('*wwwwww*z*'), 'Left side wins!');
console.log(alphabetWar('aw*lb*'), "Let's fight again");
console.log(alphabetWar('**t*u*'), "Let's fight again");
console.log(alphabetWar('tlh*e'), "Let's fight again");
console.log(alphabetWar('ghxys***ztl'), "Let's fight again");
