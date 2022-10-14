// kata - https://www.codewars.com/kata/5ac6932b2f317b96980000ca

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

const minValue = (values) => {
  return Number([...new Set(values)].sort().join(''));
};
