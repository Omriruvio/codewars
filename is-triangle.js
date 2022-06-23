// kata - https://www.codewars.com/kata/56606694ec01347ce800001b

const isTriangle = (a, b, c) => {
  return a + b > c && b + c > a && a + c > b;
};

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
