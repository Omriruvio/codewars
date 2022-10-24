// kata - https://www.codewars.com/kata/51f1342c76b586046800002a

// Round any given number to the closest 0.5 step

const solution = (n) => {
  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const rounded = Math.round(absolute * 2) / 2;
  return isNegative ? -rounded : rounded;
};

console.log(solution(4.2), 4);
console.log(solution(4.25), 4.5);
console.log(solution(4.4), 4.5);
console.log(solution(4.6), 4.5);
console.log(solution(4.75), 5);
