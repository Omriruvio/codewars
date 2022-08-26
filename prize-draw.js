// kata - https://www.codewars.com/kata/5616868c81a0f281e500005c

// input - names, weights[], desired rank
// output - the name corresponding to the requested rank
// rank is caluculated by name (length + sum of letter ranks) * weight

const rank = (names, weights, n) => {
  const namesArray = names.split(',');
  if (names.length === 0) return 'No participants';
  if (n > namesArray.length) return 'Not enough participants';
  const ranks = {};
  let i = 0;
  for (const name of namesArray) {
    const som = name.length + name.split('').reduce((a, b) => a + b.toLowerCase().charCodeAt(0) - 96, 0);
    ranks[name] = som * weights[i];
    i++;
  }
  return [...Object.entries(ranks)].sort((a, b) => {
    if (a[1] === b[1]) return a[0].localeCompare(b[0]);
    return b[1] - a[1];
  })[n - 1][0];
};

console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4), 'Benjamin');
console.log(rank('Lagon,Lily', [1, 5], 2), 'Lagon');
console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8), 'Not enough participants');
console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6), 'No participants');
