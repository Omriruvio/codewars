// kata - https://www.codewars.com/kata/525dfedb5b62f6954d000006

// receives an array of radii and returns the score according to the following rules:
// radius above 10 = 0 points
// radius between 5 and 10 = 5 points
// radius below 5 = 10 points
// if all radii are less than 5, award 100 bonus points

const scoreThrows = (radii) => {
  if (radii.length === 0) return 0;
  const score = radii.reduce((acc, radius) => {
    if (radius > 10) return acc;
    if (radius >= 5) return acc + 5;
    return acc + 10;
  }, 0);
  return score + (radii.every((radius) => radius < 5) ? 100 : 0);
};
