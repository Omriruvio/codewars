// kata - https://www.codewars.com/kata/5274e122fc75c0943d000148

// Input - integer
// Ouput - decimal representation, grouped by comma after 3 digits

const groupByCommas = (n) => {
  let result = [];
  if (n > 999) {
    let num = [...String(n)];
    let slice;
    while ((slice = num.splice(-3)).length > 2) {
      result.push(slice.join(''));
    }
    if (slice.length > 0) result.push(slice.join(''));
  } else {
    return String(n);
  }
  return result.reverse().join(',');
};

console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
console.log(groupByCommas(10000), '10,000');
console.log(groupByCommas(100000), '100,000');
console.log(groupByCommas(1000000), '1,000,000');
console.log(groupByCommas(35235235), '35,235,235');
