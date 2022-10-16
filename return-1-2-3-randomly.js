// kata - https://www.codewars.com/kata/593e84f16e836ca9a9000054

const one_two = () => {
  // return 1 or 2 randomly with equal probability
  return Math.floor(Math.random() * 2) + 1;
};

const one_two_three = () => {
  const x = one_two();
  const y = one_two();

  return x === 1 && y === 2 ? one_two_three() : x + y - 1;
};
