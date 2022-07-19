// kata - https://www.codewars.com/kata/534ea96ebb17181947000ada

function breakChocolate(n, m) {
  if (n === 0 || m === 0) return 0;
  return (n - 1) * m + m - 1;
}

describe('Testing chocolates', () => {
  it('Receives a chocolate bar and returns how many breaks required:', () => {
    expect(breakChocolate(5, 5)).toBe(24);
    expect(breakChocolate(1, 1)).toBe(0);
  });
});

// (n - 1) * m + m - 1;
