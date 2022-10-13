// kata - https://www.codewars.com/kata/52a112d9488f506ae7000b95

function isIntArray(arr) {
  return Array.isArray(arr) ? arr.every((number) => Number.isInteger(number)) : false;
}
