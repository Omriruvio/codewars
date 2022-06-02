// kata - https://www.codewars.com/kata/55b3425df71c1201a800009c

// Input - String in this format: "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
// Input - Representing hh|mm|ss results of runners
// Output - Team grade in the following format:
// Output - "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

const stat = (str) => {
  const runners = str
    .split(',')
    .map((x) => x.split('|'))
    .reduce(
      (acc, [h, m, s]) => {
        const currentRunnerTime = +h * 60 * 60 + +m * 60 + +s;
        acc.totalSeconds += currentRunnerTime;
        acc.times.push(currentRunnerTime);
        return acc;
      },
      { totalSeconds: 0, times: [] }
    );

  runners.times.sort((a, b) => a - b);
  const range = runners.times.slice(-1) - runners.times[0];
  const average = runners.times.reduce((a, b) => a + b) / runners.times.length;
  const median = getMedian(runners.times);
  if (!range || !average || !median) return '';
  return `Range: ${formatTime(range)} Average: ${formatTime(average)} Median: ${formatTime(median)}`;
};

function formatTime(seconds) {
  const hours = ~~(seconds / 3600);
  const minutes = ~~((seconds / 60) % 60);
  const secs = ~~(seconds % 60);
  const padTime = (time) => (time > 9 ? time : `0${time}`);
  return `${padTime(hours)}|${padTime(minutes)}|${padTime(secs)}`;
}

function getMedian(arr) {
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    const mid = arr.length / 2;
    return (arr[mid] + arr[mid - 1]) / 2;
  }
}

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17'));
console.log('Range: 01|01|18 Average: 01|38|05 Median: 01|32|34');
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41'));
console.log('Range: 00|31|17 Average: 02|26|18 Median: 02|22|00');
