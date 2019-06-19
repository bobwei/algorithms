const moviesOnFlight = (durations, t) => {
  durations.sort((a, b) => a - b);
  const m = durations.length;
  const output = [-Infinity, -Infinity];
  let j = m - 1;
  for (let i = 0; i < m - 1; i++) {
    while (durations[i] + durations[j] > t - 30) {
      j -= 1;
    }
    if (durations[i] + durations[j] > output[0] + output[1]) {
      [output[0], output[1]] = [durations[i], durations[j]];
    }
  }
  return output;
};

export default moviesOnFlight;
