// kata - https://www.codewars.com/kata/5b6db1acb118141f6b000060

const recycle = (waste) => {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  waste.forEach((item) => {
    bins[item.material] ? bins[item.material].push(item.type) : (bins[item.material] = [item.type]);
    item.secondMaterial ? (bins[item.secondMaterial] ? bins[item.secondMaterial].push(item.type) : (bins[item.secondMaterial] = [item.type])) : null;
  });

  return Object.values(bins);
};

const assert = require('assert');
let a = [
  { type: 'rotten apples', material: 'organic' },
  { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];
let b = [
  ['wine bottle', 'amazon box', 'beer bottle'],
  ['wine bottle', 'beer bottle'],
  ['rotten apples', 'out of date yogurt'],
  ['out of date yogurt'],
];
assert.deepEqual(recycle(a), b);
