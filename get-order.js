// kata - https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// New Cashier Does Not Know About Space or Shift

// Input - String of menu items
// Ouput - String with separated and ordered, order items.

const getOrder = (input) => {
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  const result = [];
  for (const item of menu) {
    const regexp = new RegExp(item, 'gi');
    const foundItems = input.match(regexp);
    foundItems && result.push(...foundItems.map((x) => x[0].toUpperCase() + x.slice(1)));
  }
  return result.join(' ');
};

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'),
  '\n',
  'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke'
);
console.log(getOrder('pizzachickenfriesburgercokemilkshakefriessandwich'), '\n', 'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke');
