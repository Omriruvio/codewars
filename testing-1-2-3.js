// kata - https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

const number = array => {
  return array.map((x, i) => {
    return `${i + 1}: ${x}`;
  });
};
console.log(number([]), [], 'Empty array should return empty array');
console.log(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c'], 'Return the correct line numbers');
