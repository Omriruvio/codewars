// kata - https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

const createMessage = (strA) => {
  return (strB) => {
    if (strB) {
      return createMessage(`${strA} ${strB}`);
    }
    return strA;
  };
};

console.log(createMessage('hello')('world')('sup')() === 'hello world sup');
