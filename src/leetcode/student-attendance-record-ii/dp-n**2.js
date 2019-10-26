/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const M = 10 ** 9 + 7;
  const p = 1;
  const q = 2;
  const dp = [...new Array(n + 1)].map(() => [...new Array(p + 1)].map(() => new Array(q + 1)));
  for (let j = 0; j <= p; j++) {
    for (let k = 0; k <= q; k++) {
      dp[0][j][k] = 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= p; j++) {
      for (let k = 0; k <= q; k++) {
        // prettier-ignore
        const sum = (j - 1 >= 0 ? dp[i - 1][j - 1][q] : 0)
          + (k - 1 >= 0 ? dp[i - 1][j][k - 1] : 0)
          + dp[i - 1][j][q];
        dp[i][j][k] = sum % M;
      }
    }
  }
  return dp[n][p][q];
};
