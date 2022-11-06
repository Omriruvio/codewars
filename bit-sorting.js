// kata - https://www.codewars.com/kata/59fa8e2646d8433ee200003f

// [3, 8, 3, 6, 5, 7, 9, 1] =>

const sortByBit = (arr) => {
  const bitSort = (a, b) => {
    const aBits = a
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length;
    const bBits = b
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length;
    if (aBits === bBits) {
      return a - b;
    }
    return aBits - bBits;
  };
  return arr.sort(bitSort);
};
