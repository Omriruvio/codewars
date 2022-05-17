// kata - https://www.codewars.com/kata/53697be005f803751e0015aa

const convert = { a: 1, 1: 'a', e: 2, 2: 'e', i: 3, 3: 'i', o: 4, 4: 'o', u: 5, 5: 'u' };

function encode(string) {
  return [...string].map((x) => (x in convert ? convert[x] : x)).join('');
}

function decode(string) {
  return [...string].map((x) => (x in convert && !isNaN(x) ? convert[x] : x)).join('');
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
