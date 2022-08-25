// kata - https://www.codewars.com/kata/55d1d6d5955ec6365400006d

const roundToNext5 = (n) => {
  while (n % 5 !== 0) n++;
  return n;
};

console.log(roundToNext5(0), 0);
console.log(roundToNext5(1), 5);
console.log(roundToNext5(6), 10);
console.log(roundToNext5(-2), 0);
console.log(roundToNext5(-6), -5);
console.log(roundToNext5(-10), -10);
