// kata - https://www.codewars.com/kata/5571f712ddf00b54420000ee

function looseChange(cents) {
  cents = Math.floor(cents);
  const convert = new Map([
    ['Quarters', 25],
    ['Dimes', 10],
    ['Nickels', 5],
    ['Pennies', 1],
  ]);
  const result = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 };
  for (const [type] of convert) {
    while (cents - convert.get(type) >= 0) {
      cents -= convert.get(type);
      result[type] = result[type] ? ++result[type] : 1;
    }
  }
  return result;
}

console.log(looseChange(56), { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 });
console.log(looseChange(100), { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 4 });
console.log(looseChange(0), { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 });
console.log(looseChange(-3), { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }, 'no looseChange for -3 cents');
console.log(looseChange(7.9), { Nickels: 1, Pennies: 2, Dimes: 0, Quarters: 0 }, '7.9 cents should be rounded down to 7');
