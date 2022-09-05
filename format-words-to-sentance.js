// kata - https://www.codewars.com/kata/51689e27fe9a00b126000004

function formatWords(words){
  if (!words) return '';
  const filtered = words.filter(x => !!x);
  if (filtered.length === 1) return String(filtered[0]);
  if (filtered.length === 0) return '';
  const last = filtered.at(-1);
  return filtered.slice(0, filtered.length - 1).join(', ') + ` and ${last}`;
}

console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four')
console.log(formatWords(['one']), 'one')
console.log(formatWords(['one', '', 'three']), 'one and three')
console.log(formatWords(['', '', 'three']), 'three')
console.log(formatWords(['one', 'two', '']), 'one and two')
console.log(formatWords([]),'')
console.log(formatWords(null), '')
console.log(formatWords(['']), '')