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
  for (let i = 0; i < m - 0; i++) {
    const j = i + 0;
    dp[i][j] = true;
    output = max(output, s, dp, i, j);
  }
  for (let i = 0; i < m - 1; i++) {
    const j = i + 1;
    dp[i][j] = s[i] === s[j];
    output = max(output, s, dp, i, j);
  }
  for (let n = 2; n < m; n++) {
    for (let i = 0; i < m - n; i++) {
      const j = i + n;
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      output = max(output, s, dp, i, j);
    }
  }
  return output;
};

function max(output, s, dp, i, j) {
  if (dp[i][j] && j - i + 1 > output.length) {
    return s.substring(i, j + 1);
  }
  return output;
}
