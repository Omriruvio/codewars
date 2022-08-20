// kata - https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
  const num = +n;
  const isBoolean = typeof n === 'boolean';
  const isFloat = Math.floor(num) !== num;
  const isInfinite = n === Infinity || n === -Infinity;
  if (isNaN(num) || isBoolean || n < 0 || isFloat || isInfinite) throw new TypeError(`${n} is invalid`);
  return Array.from({ length: +num }, (x) => v);
}

describe('Tests', () => {
  it('test', () => {
    expect(prefill(3, 1)).toStrictEqual([1, 1, 1]);
    expect(prefill(2, 'abc')).toStrictEqual(['abc', 'abc']);
    expect(prefill('1', 1)).toStrictEqual([1]);
    expect(prefill(3, prefill(2, '2d'))).toStrictEqual([
      ['2d', '2d'],
      ['2d', '2d'],
      ['2d', '2d'],
    ]);
    var errorThrown = false;
    try {
      prefill('xyz', 1);
    } catch (e) {
      expect(e.name).toStrictEqual('TypeError');
      expect(e.message).toStrictEqual('xyz is invalid');
    }
  });
});
