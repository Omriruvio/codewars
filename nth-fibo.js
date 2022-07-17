// kata - https://www.codewars.com/kata/522551eee9abb932420004a0

function nthFibo(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 1) return 0;
  if (n === 2) return 1;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(nthFibo(1), 0, '1-st Fibo');
console.log(nthFibo(2), 1, '2-nd Fibo');
console.log(nthFibo(3), 1, '3-rd Fibo');
console.log(nthFibo(4), 2, '4-th Fibo');
