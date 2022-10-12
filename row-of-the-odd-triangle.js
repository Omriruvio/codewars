// kata - https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

const oddRow = (n) => {
  const first = n ** 2 - n + 1;
  const last = n ** 2 + n - 1;
  const result = [];
  for (let i = first; i <= last; i += 2) {
    result.push(i);
  }
  return result;
};
