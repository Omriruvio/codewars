// kata - https://www.codewars.com/kata/59752e1f064d1261cb0000ec

console.log(whatTimeIsIt(90), '03:00');
console.log(whatTimeIsIt(180), '06:00');
console.log(whatTimeIsIt(270), '09:00');
console.log(whatTimeIsIt(360), '12:00');
console.log(whatTimeIsIt(0), '12:00');
console.log(whatTimeIsIt(30), '01:00');
console.log(whatTimeIsIt(45), '01:30');
console.log(whatTimeIsIt(40), '01:20');
console.log(whatTimeIsIt(50), '01:40');
console.log(whatTimeIsIt(10.750770421514106), '12:21');

function whatTimeIsIt(angle) {
  let hours = Math.floor(angle / 30) || 12;
  let minutes = Math.floor((angle % 30) * 2);
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}
