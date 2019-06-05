/**
 * @param {string} s
 * @return {string}
 */
/*
  dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
*/
var longestPalindrome = function(s) {
  const m = s.length;
  const dp = [...new Array(m)].map(() => new Array(m).fill(false));
  let output = '';
  for (let i = 0; i < m; i++) {
    dp[i][i] = true;
    if (dp[i][i] && 1 > output.length) {
      output = s.substring(i, i + 1);
    }
  }
  for (let i = 0; i < m - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1] && 2 > output.length) {
      output = s.substring(i, i + 2);
    }
  }
  for (let length = 3; length <= m; length++) {
    for (let i = 0; i <= m - length; i++) {
      const j = i + length - 1;
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      if (dp[i][j] && j - i + 1 > output.length) {
        output = s.substring(i, j + 1);
      }
    }
  }
  return output;
};
