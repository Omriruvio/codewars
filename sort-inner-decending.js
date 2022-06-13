// kata - https://www.codewars.com/kata/5898b4b71d298e51b600014b

function sortTheInnerContent(words) {
  return words
    .split(' ')
    .map((word) => (word.length > 1 ? `${word[0]}${word.slice(1, -1).split('').sort().reverse().join('')}${word.slice(-1)}` : word))
    .join(' ');
}

console.log(sortTheInnerContent('sort the inner content in descending order'), 'srot the inner ctonnet in dsnnieedcg oredr');
console.log(sortTheInnerContent('wait for me'), 'wiat for me');
console.log(sortTheInnerContent('this kata is easy'), 'tihs ktaa is esay');
