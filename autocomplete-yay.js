//kata - https://www.codewars.com/kata/5389864ec72ce03383000484/

const autocomplete = (input, dictionary) => {
  input = input.replace(/\W/g, '');
  return dictionary.filter((x) => x.toLowerCase().startsWith(input.toLowerCase())).slice(0, 5);
};

console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']), ['airplane', 'airport']);
console.log(autocomplete('ai', ['Airplane', 'Airport', 'apple', 'ball']), ['Airplane', 'Airport']);
