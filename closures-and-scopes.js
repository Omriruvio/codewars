// kata - https://www.codewars.com/kata/526ec46d6f5e255e150002d1

function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

describe('example tests', function () {
  it('functions must return correct number', function () {
    var callbacks = createFunctions(5);

    for (var i = 0; i < callbacks.length; i++) {
      expect(callbacks[i]()).toBe(i);
    }
  });
});
