/**
 * @param {string} s
 * @return {number}
 */
/*
  dp[i][j] = s[i] === s[j]
    ? dp[i + 1][j - 1] + 2
    : Math.max(dp[i][j - 1], dp[i + 1][j]);
*/
var longestPalindromeSubseq = function(s) {
  const m = s.length;
  const dp = [...new Array(m)].map(() => new Array(m).fill(0));
  let max = 0;
  for (let i = 0; i < m; i++) {
    const j = i;
    dp[i][j] = 1;
    max = Math.max(max, dp[i][j]);
  }
  for (let i = 0; i < m - 1; i++) {
    const j = i + 1;
    dp[i][i + 1] = s[i] === s[j] ? 2 : 1;
    max = Math.max(max, dp[i][j]);
  }
  for (let length = 3; length <= m; length++) {
    for (let i = 0; i <= m - length; i++) {
      const j = i + length - 1;
      dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] + 2 : Math.max(dp[i][j - 1], dp[i + 1][j]);
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
