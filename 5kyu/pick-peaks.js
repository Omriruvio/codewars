// kata - https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

// Input - array of integers
// Output - object {pos: [a,b,c], peaks: [x,y,z]}

const pickPeaks = (arr) => {
  const result = { pos: [], peaks: [] };
  const { pos, peaks } = result;
  // track rising, declining
  let rising = arr[0] < arr[1];
  // loop from index 1 to length-1 (edges not included)
  for (let i = 1; i < arr.length; i++) {
    const [current, previous] = [arr[i], arr[i - 1]];
    // if current > previous -> set rising
    if (current > previous) {
      // if current > previous & rising -> replace latest in pos, set rising
      if (rising) {
        pos.length !== 0 ? (pos[pos.length - 1] = i) : pos.push(i);
      } else {
        // if current > previous & declining -> push current to pos, set rising
        pos.push(i);
        rising = true;
      }
    } else if (current < previous && rising) {
      // if current < previous & rising -> push latest arr[pos] to peaks, set declining
      peaks.push(arr[pos.slice(-1)]);
      rising = false;
    }
  }

  // remove trailing pos according to match peaks length
  pos.length = peaks.length;
  return result;
};

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), { pos: [3, 7, 10], peaks: [6, 3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), { pos: [2, 4], peaks: [3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
console.log(pickPeaks([]), { pos: [], peaks: [] });
console.log(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });

// 2 - rising pos 1 peaks -
// 3 - rising pos 2 peaks -
// 6 - rising pos 3 peaks -
// 4 - declining pos 3 peaks 6
// 1 - declining pos 3 peaks 6
// 2 - rising pos 3 6 peaks 6
// 3 - rising pos 3 7 peaks 6
// 2 - declining pos 3 7 peaks 6 3

// 1 - declining pos - peaks -
// 3 - rising pos 2 peaks -
// 2 - declining pos 2 peaks 3
// 2 - declining pos 2 peaks 3
// 2 - declining pos 2 peaks 3
// 2 - declining pos 2 peaks 3
// 5 - rising pos 2 7 peaks 3

// 3 - rising pos 2 peaks -
// 1 - declining pos 2 peaks 3
// 2 - rising pos 2 4 peaks 3
// 2 - rising pos 2 4 peaks 3
// 2 - rising pos 2 4 peaks 3
// 2 - rising pos 2 4 peaks 3
// 1 - declining pos 2 4 peaks 3 2
