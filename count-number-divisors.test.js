// kata - https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) count++;
  }
  return count;
}

describe('Tests', () => {
  it('test', () => {
    expect(getDivisorsCnt(1)).toBe(1);
    expect(getDivisorsCnt(10)).toBe(4);
    expect(getDivisorsCnt(11)).toBe(2);
    expect(getDivisorsCnt(54)).toBe(8);
  });
});
