// kata - https://www.codewars.com/kata/54f9f4d7c41722304e000bbb

const firstDup = (s) => {
  const seen = new Map();
  return (
    [...s].reduce(
      (first, current, i) => {
        const previousIndex = seen.get(current);
        if (previousIndex !== -1 && previousIndex < first.index) {
          first.index = previousIndex;
          first.letter = current;
        }
        seen.set(current, i);
        return first;
      },
      { letter: '', index: Infinity }
    ).letter || undefined
  );
};

const Test = {};
Test.assertEquals = require('assert').deepEqual;
Test.assertEquals(firstDup('tweet'), 't');
Test.assertEquals(firstDup('Ode to Joy'), ' ');
Test.assertEquals(firstDup('ode to joy'), 'o');
Test.assertEquals(firstDup('bar'), undefined);
Test.assertEquals(firstDup('123123'), '1');
Test.assertEquals(firstDup('!@#$!@#$'), '!');
