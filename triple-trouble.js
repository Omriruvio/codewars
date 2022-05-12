// kata - https://www.codewars.com/kata/55d5434f269c0c3f1b000058

// P - I - two integers
// R - return 1 if straight triple in num1 and straight double in num2, else 0

const tripledouble = (num1, num2) => {
  const cache = { one: {}, two: {} };
  const [arr1, arr2] = [[...String(num1)], [...String(num2)]];
  const findStreak = (streakCount, arr, cacheId) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        cache[cacheId][arr[i]] = cache[cacheId][arr[i]] ? ++cache[cacheId][arr[i]] : 2;
      } else if (cache[cacheId][arr[i - 1]] < streakCount) cache[cacheId][arr[i - 1]] = null;
    }
  };
  findStreak(3, arr1, 'one');
  findStreak(2, arr2, 'two');

  for (const [streakNum, streakCount] of Object.entries(cache.one)) {
    if (streakCount >= 3 && streakNum in cache.two) return 1;
  }
  return 0;
};

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);
