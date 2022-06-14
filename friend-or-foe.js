// kata - https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  return friends.filter((x) => x.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']), ['Jimm', 'Cari', 'aret']);
console.log(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
