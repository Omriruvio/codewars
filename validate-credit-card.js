// kata - https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

// P - Input integer representing credit card
// R - Output boolean determining the validity according to Luhn Algorithm

const validate = (n) => {
  const arr = [...String(n)];
  const isEven = arr.length % 2 === 0;
  return (
    arr.map((x, i) => {
        const res = (isEven && i % 2 === 0) || (!isEven && i % 2 !== 0) ? x * 2 : +x;
        return res > 9 ? res - 9 : res;
      }).reduce((a, b) => a + b) % 10 === 0
  );
};

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
