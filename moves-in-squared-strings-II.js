// kata - https://www.codewars.com/kata/56dbe7f113c2f63570000b86

const rot = (s) =>
  s
    .split('\\n')
    .map((e) => e.split('').reverse().join(''))
    .reverse()
    .join('\n');

const selfieAndRot = (s) => {
  const dotsBeforeOrAfter = (s, before) => {
    return s
      .split('\n')
      .map((e) => (before ? '.'.repeat(e.length) + e : e + '.'.repeat(e.length)))
      .join('\n');
  };

  return dotsBeforeOrAfter(s, false) + '\n' + dotsBeforeOrAfter(rot(s), true);
};

const oper = (fct, s) => fct(s);

const s = 'uLcq\nJkuL\nYirX\nnwMB';
console.log(selfieAndRot(s));
