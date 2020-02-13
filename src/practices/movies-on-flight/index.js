function movieOnFlight(durations, d) {
  const arr = durations.map((dur, i) => [dur, i]).sort((a, b) => a[0] - b[0]);
  const output = [[], 0, 0];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const sum = arr[i][0] + arr[j][0];
    if (sum > d - 30) {
      j -= 1;
    } else {
      if (sum > output[1] || Math.max(arr[i][0], arr[j][0]) > output[2]) {
        output[0] = [arr[i][1], arr[j][1]];
        output[1] = sum;
        output[2] = Math.max(arr[i][0], arr[j][0]);
      }
      i += 1;
    }
  }
  return output[0];
}

(() => {
  const durations = [90, 85, 75, 60, 120, 150, 125];
  const d = 250;
  console.log(movieOnFlight(durations, d));
})();

(() => {
  const durations = [90, 85, 75, 60, 120, 110, 110, 150, 125];
  const d = 250;
  console.log(movieOnFlight(durations, d));
})();

(() => {
  const durations = [90, 85, 75, 60, 120, 150, 125];
  const d = 50;
  console.log(movieOnFlight(durations, d));
})();

(() => {
  const durations = [90, 85, 75, 60, 120, 150, 125];
  const d = 220;
  console.log(movieOnFlight(durations, d));
})();

(() => {
  const durations = [10, 50, 60];
  const d = 120;
  console.log(movieOnFlight(durations, d));
})();
