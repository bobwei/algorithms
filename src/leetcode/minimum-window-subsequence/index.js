/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  const m = S.length;
  const n = T.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(-1));
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  let min = Infinity;
  let output = '';
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = S[i - 1] === T[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j];
    }
    if (dp[i][n] > -1) {
      if (i - dp[i][n] < min) {
        min = i - dp[i][n];
        output = S.substring(dp[i][n], i);
      }
    }
  }
  return output;
};
