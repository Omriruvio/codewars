// kata - https://www.codewars.com/kata/598106cb34e205e074000031/

// Input - String of rats O~ or ~O and P piper
// Return - count of rats that run away from the piper

// option 1, did not work with node V10...

// const countDeafRats = (town) => {
//   let blind = 0;
//   const piperIndex = town.indexOf('P');
//   const regexp = /(~O|O~)/g;
//   [...town.matchAll(regexp)].forEach((rat) => {
//     const ratType = rat[0] === '~O' ? 'right' : 'left';
//     if (ratType === 'right' && rat.index > piperIndex) blind++;
//     if (ratType === 'left' && rat.index < piperIndex) blind++;
//   });
//   return blind;
// };

// option 2, works with node v10...

const countDeafRats = (town) => {
  const piperIndex = town.indexOf('P');
  let deaf = 0;
  let rat;
  const regexp = /~O|O~/g;
  while ((rat = regexp.exec(town))) {
    const ratIndex = regexp.lastIndex - 1;
    const ratType = rat[0] === '~O' ? 'right' : 'left';
    if (ratType === 'right' && ratIndex > piperIndex) deaf++;
    if (ratType === 'left' && ratIndex < piperIndex) deaf++;
  }
  return deaf;
};

console.log(countDeafRats('~O~O~O~O P'), 0);
console.log(countDeafRats('~O~O~O~OO~~O P~OO~'), 2);
console.log(countDeafRats('P O~ O~ ~O O~'), 1);
console.log(countDeafRats('~O~O~O~OP~O~OO~'), 2);
