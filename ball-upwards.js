// kata - https://www.codewars.com/kata/566be96bb3174e155300001b

// Input - Receives v in kmh
// Output - time in tenth of seconds to max height

const maxBall = (v) => {
  const getCurrentHeight = (kmh, s) => kmh * (1 / 3.6) * (s / 10) - 0.5 * 9.81 * (s / 10) * (s / 10);
  let maxHeight = -Infinity;
  let tick = 0;
  while (getCurrentHeight(v, tick) > maxHeight) {
    maxHeight = getCurrentHeight(v, tick);
    tick++;
  }
  return --tick;
};

console.log(maxBall(37), 10);
console.log(maxBall(45), 13);
console.log(maxBall(99), 28);
console.log(maxBall(85), 24);
