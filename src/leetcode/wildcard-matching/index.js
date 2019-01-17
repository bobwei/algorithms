/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  const dp = [...new Array(s.length + 1)].map(() => new Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 1];
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      dp[i][j] = (() => {
        if (p[j - 1] === '*') {
          for (let k = 0; k <= i - 1; k++) {
            if (dp[k][j]) {
              return true;
            }
          }
          return dp[i][j - 1];
        }
        return (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
      })();
    }
  }
  return dp[s.length][p.length];
};
