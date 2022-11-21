// kata - https://www.codewars.com/kata/52755006cc238fcae70000ed

const christmasTree = (height) => {
  if (height < 1) return '';
  const tree = [];
  const spaces = ' '.repeat(height - 1);
  const stars = '*'.repeat(1);
  tree.push(spaces + stars + spaces);
  for (let i = 1; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1);
    const stars = '*'.repeat(i * 2 + 1);
    tree.push(spaces + stars + spaces);
  }
  return tree.join('\n');
};

console.log(christmasTree(5));
