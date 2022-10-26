// kata - https://www.codewars.com/kata/546dba39fa8da224e8000467

const runLengthEncoding = (str) => {
  let result = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push([count, str[i]]);
      count = 1;
    }
  }
  return result;
};

console.log(runLengthEncoding('aaaab'));
