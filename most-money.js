// kata - https://www.codewars.com/kata/528d36d7cc451cd7e4000339

const mostMoney = (students) => {
  if (students.length === 1) return students[0].name;
  return students.reduce(
    (richest, student) => {
      const studentMoney = student.fives * 5 + student.tens * 10 + student.twenties * 20;
      if (studentMoney > richest.money) {
        richest.money = studentMoney;
        richest.name = student.name;
      } else if (studentMoney === richest.money) {
        richest.name = 'all';
      }
      return richest;
    },
    { money: 0, name: '' }
  ).name;
};

console.log(
  mostMoney([
    { name: 'A', fives: 0, tens: 0, twenties: 2 },
    { name: 'B', fives: 0, tens: 0, twenties: 2 },
  ]),
  'all'
);
console.log(
  mostMoney([
    { name: 'A', fives: 0, tens: 0, twenties: 2 },
    { name: 'B', fives: 0, tens: 0, twenties: 3 },
  ]),
  'B'
);
console.log(
  mostMoney([
    { name: 'A', fives: 0, tens: 0, twenties: 2 },
    { name: 'B', fives: 0, tens: 0, twenties: 2 },
    { name: 'C', fives: 0, tens: 0, twenties: 2 },
  ]),
  'all'
);
console.log(
  mostMoney([
    { name: 'A', fives: 0, tens: 0, twenties: 2 },
    { name: 'B', fives: 0, tens: 0, twenties: 2 },
    { name: 'C', fives: 0, tens: 0, twenties: 2 },
    { name: 'D', fives: 1, tens: 0, twenties: 2 },
  ]),
  'D'
);
