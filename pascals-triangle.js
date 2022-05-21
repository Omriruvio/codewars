// kata - https://www.codewars.com/kata/5226eb40316b56c8d500030f

// P - Input - n denoting pascals triangles depth
// R - flattened array representing rows of pascals triangle

const pascalsTriangle = (n) => {
  if (n === 1) return [1];
  const pascal = [[1], [1, 1]];
  for (let i = 3; i <= n; i++) {
    const currentRow = [];
    for (let j = 1; j < pascal[pascal.length - 1].length; j++) {
      currentRow.push(pascal[i - 2][j] + pascal[i - 2][j - 1]);
    }
    pascal.push([1, ...currentRow, 1]);
  }
  return pascal.flat();
};

console.log(pascalsTriangle(1), [1]);
console.log(pascalsTriangle(2), [1, 1, 1]);
console.log(pascalsTriangle(3), [1, 1, 1, 1, 2, 1]);
console.log(pascalsTriangle(4), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);
console.log(pascalsTriangle(6), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1]);
