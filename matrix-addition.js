// kata - https://www.codewars.com/kata/526233aefd4764272800036f

// Input - 2 matrices N * N sized (square)
// Ouput - N * N matrix with the sum of the 2 matrcies

const matrixAddition = (a, b) => {
  const c = Array.from({ length: a.length }, (x) => Array.from({ length: a.length }));
  for (let x = 0; x < a.length; x++) {
    for (let y = 0; y < a.length; y++) {
      c[x][y] = a[x][y] + b[x][y];
    }
  }
  return c;
};

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  ),
  '\n',
  [
    [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4],
  ]
);
