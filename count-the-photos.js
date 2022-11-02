//kata - https://www.codewars.com/kata/6319dba6d6e2160015a842ed

const countPhotos = (road) => {
  let rightCount = 0;
  let cameraCount = 0;
  let totalPhotos = 0;
  [...road].forEach((char) => {
    if (char === '>') {
      rightCount++;
    } else if (char === '<') {
      totalPhotos += cameraCount;
    } else if (char === '.') {
      totalPhotos += rightCount;
      cameraCount++;
    }
  });
  return totalPhotos;
};

countPhotos('>.>..<');

const assert = require('assert');
assert.deepEqual(countPhotos('>.>..<'), 8);
assert.deepEqual(countPhotos('.><.>>.<<'), 11);
assert.deepEqual(countPhotos('.>>>'), 0);
assert.deepEqual(countPhotos('>..<<.>.<.'), 15);
assert.deepEqual(countPhotos('.<>>..><.<<<<<.'), 34);
assert.deepEqual(countPhotos('<..>>..>>.><.<.><..<'), 57);
assert.deepEqual(countPhotos('<<.'), 0);
assert.deepEqual(countPhotos('>>>.<<<'), 6);
assert.deepEqual(countPhotos('..'), 0);
assert.deepEqual(countPhotos('>>><<<'), 0);
assert.deepEqual(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'), 248);
