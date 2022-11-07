// kata - https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

const sortme = (names) => {
  return names.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
};

console.log(sortme(['Hello', 'there', 'I', 'am', 'here']), ['am', 'Hello', 'here', 'I', 'there']);
