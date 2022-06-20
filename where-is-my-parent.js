// kata - https://www.codewars.com/kata/58539230879867a8cd00011c

// Input - String contains only letters, uppercase letters are unique.
// Ouput - String sorted as such "aAbaBb" => "AaaBbb"

const findChildren = (str) => {
  let previous = '';
  return [...str]
    .map((x) => x.toLowerCase())
    .sort()
    .map((x) => {
      const result = x !== previous ? x.toUpperCase() : x;
      previous = x;
      return result;
    })
    .join('');
};

console.log(findChildren('beeeEBb'), 'BbbEeee');
console.log(findChildren('uwwWUueEe'), 'EeeUuuWww');
console.log(findChildren('abBA'), 'AaBb');
console.log(findChildren('AaaaaZazzz'), 'AaaaaaZzzz');
console.log(findChildren('CbcBcbaA'), 'AaBbbCcc');
console.log(findChildren('xXfuUuuF'), 'FfUuuuXx');
