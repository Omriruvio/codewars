// kata - https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

// add(1)(2)(3)...
// write a function that chain sums any amount of numbers

function add(n) {
  function inner(m) {
    return add(n + m);
  }
  inner.valueOf = () => n;
  return inner;
}

console.log(add(1)(2)(3) == 6);
