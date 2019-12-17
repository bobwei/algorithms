/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
  const n = flights.length;
  const k = days[0].length;
  let dp = new Array(n).fill(-Infinity);
  dp[0] = days[0][0];
  for (let p = 1; p < n; p++) {
    dp[p] = flights[0][p] ? days[p][0] : -Infinity;
  }
  let max = 0;
  for (let i = 1; i < k; i++) {
    const next = new Array(n).fill(-Infinity);
    for (let p = 0; p < n; p++) {
      for (let q = 0; q < n; q++) {
        // prettier-ignore
        const val = (flights[q][p] === 1 || p === q)
          ? (i - 1 >= 0 ? dp[q] : 0) + days[p][i]
          : -Infinity;
        next[p] = Math.max(next[p], val);
        max = Math.max(max, next[p]);
      }
    }
    dp = next;
  }
  return max;
};
