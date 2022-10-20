// kata - https://www.codewars.com/kata/583a8bde28019d615a000035

const findOddNames = (list) => {
  return list.filter((dev) => {
    const asciiSum = [...dev.firstName].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return asciiSum % 2 !== 0;
  });
};
