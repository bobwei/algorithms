/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = [...new Array(s.length + 1)].map(() => new Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      if (p[j + 1] === '*') {
        dp[i][j] =
          (j < p.length && dp[i][j + 2]) ||
          (i < s.length && (p[j] === s[i] || p[j] === '.') && dp[i + 1][j]);
        continue;
      }
      dp[i][j] = i + 1 <= s.length && (p[j] === s[i] || p[j] === '.') && dp[i + 1][j + 1];
    }
  }
  return dp[0][0];
};
