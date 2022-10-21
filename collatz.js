// kata - https://www.codewars.com/kata/5286b2e162056fd0cb000c20

const collatz = (n) => {
  let result = String(n);
  while (n !== 1) {
    if (n % 2 === 0) n /= 2;
    else n = 1 + n * 3;
    result += '->' + n;
  }
  return result;
};

console.log(collatz(3), '3->10->5->16->8->4->2->1');
