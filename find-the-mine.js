// kata - https://www.codewars.com/kata/528d9adf0e03778b9e00067e

const mineLocation = (field) => {
  const row = field.findIndex((row) => row.includes(1));
  const col = field[row].indexOf(1);
  return [row, col];
};
