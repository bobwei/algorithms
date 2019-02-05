/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 1];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (() => {
        if (p[j - 1] === '*') {
          for (let k = 0; k < i; k++) {
            if (dp[k][j]) {
              return true;
            }
          }
          return dp[i][j - 1];
        }
        return (p[j - 1] === s[i - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
      })();
    }
  }
  return dp[m][n];
};
