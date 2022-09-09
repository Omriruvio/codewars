// kata - https://www.codewars.com/kata/511f11d355fe575d2c000001

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const { first, second } = ages.reduce(
    ({ first, second }, age) => {
      if (age > first) [second, first] = [first, age];
      else if (age > second) second = age;
      return { first, second };
    },
    { first: 0, second: 0 }
  );
  return [second, first];
}

let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);
console.log(twoOldestAges(results1), 45, 87);
console.log(twoOldestAges(results1), 45, 87);
console.log(twoOldestAges(results2), 18, 83);
console.log(twoOldestAges(results2), 18, 83);
