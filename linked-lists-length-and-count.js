// kata - https://www.codewars.com/kata/55beec7dd347078289000021

// Input - head, linked list
// Output - count of nodes in linked list

const Node = (data) => {
  this.data = data;
  this.next = null;
};

const length = (list) => {
  let count = 0;
  while (list) {
    count++;
    list = list.next;
  }
  return count;
};

const count = (list, n) => {
  let count = 0;
  while (list) {
    if (list.data === n) count++;
    list = list.next;
  }
  return count;
};

// prettier-ignore
const list0 = { data: 1, next: { data: 2, next: { data: 3, next: null } } }
console.log(count(list0, 1), 1);
console.log(count(list0, 2), 1);
console.log(count(list0, 3), 1);
console.log(count(list0, 99), 0);
console.log(count(null, 1), 0);
// const list1 = { data: 1, next: { data: 2, next: { data: 3, next: null } } }
// console.log(length(list1), 3);
// const list2 = null;
// console.log(length(list2), 0);
// const list3 = { data: 99, next: null };
// console.log(length(list3), 1);
