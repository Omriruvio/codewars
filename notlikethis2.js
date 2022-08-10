class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend = (friend) => this.friends.push(friend);

  _replacer = (key, value) => {
    const isObject = (entity) => typeof entity === 'object' && !Array.isArray(entity) && entity !== null;
    if (isObject(value) && key !== '') return String(value);
    return value;
  };

  print = (indent = 2) => {
    return JSON.stringify(this, this._replacer, indent);
  };

  [Symbol.toPrimitive] = () => this.name;
}

const p1 = new Person('Omri', 30);
const p2 = new Person('Omri2', 35);

p1.addFriend(p2);
p2.addFriend(p1);

console.log(p1.print(2));
// {
//   "name": "Omri",
//   "age": 30,
//   "friends": [
//     "Omri2"
//   ]
// }
