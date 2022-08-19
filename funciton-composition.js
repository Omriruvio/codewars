// kata - https://www.codewars.com/kata/5421c6a2dda52688f6000af8

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

describe('Sample Tests', () => {
  it('Should work with a single argument', () => {
    const add1 = function (a) {
      return a + 1;
    };
    const id = function (a) {
      return a;
    };

    expect(compose(add1, id)(0)).toBe(1);
  });
  it('Should work with a single argument', () => {
    const add1 = function (a) {
      return a + 1;
    };
    const addAll3 = function (a, b, c) {
      return a + b + c;
    };
    expect(compose(add1, addAll3)(1, 2, 3)).toBe(7);
  });
});
