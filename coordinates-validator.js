// kata - https://www.codewars.com/kata/5269452810342858ec000951

// input - string
// output - true/fase valid coordinates
// valid coordinates: Lat -90 - 90 Long -180 - 180
// digits allowed: -, .
// no space after - and after the the digit following it

function isValidCoordinates(coordinates) {
  if (!/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/g.test(coordinates)) return false;

  const [latStr, lonStr] = coordinates.split(',');
  const [lat, lon] = [parseFloat(latStr), parseFloat(lonStr)];

  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return false;

  return true;
}

const ValidCoordinates = ['-23, 25', '4, -3', '24.53525235, 23.45235', '04, -23.234235', '43.91343345, 143'];
for (i in ValidCoordinates) {
  console.log(isValidCoordinates(ValidCoordinates[i]), true);
}

const InvalidCoordinates = [
  '23.234, - 23.4234',
  '2342.43536, 34.324236',
  'N23.43345, E32.6457',
  '99.234, 12.324',
  '6.325624, 43.34345.345',
  '0, 1,2',
  '0.342q0832, 1.2324',
  '23.245, 1e1',
];
for (i in InvalidCoordinates) {
  console.log(isValidCoordinates(InvalidCoordinates[i]), false);
}
