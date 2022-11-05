// kata - https://www.codewars.com/kata/527a6e602a7db3456e000a2b

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

// prototype method that receives period separated string representing path to nested object property
// return value of nested object property or undefined if property does not exist
Object.prototype.hash = function (string) {
  const path = string.split('.');
  let current = this;
  for (let i = 0; i < path.length; i++) {
    if (current[path[i]] === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
};

console.log(obj.hash('person.name'), obj.person.name);
console.log(obj.hash('person.history.bio'), obj.person.history.bio); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet'), undefined); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater'), undefined); // undefined
