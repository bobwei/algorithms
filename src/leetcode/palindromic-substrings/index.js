/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let n = 0;
  const dp = [...new Array(s.length)].map(() => new Array(s.length).fill(true));
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    n += 1;
  }
  for (let length = 2; length <= s.length; length++) {
    for (let i = 0; i <= s.length - length; i++) {
      dp[i][i + length - 1] = dp[i + 1][i + length - 1 - 1] && s[i] === s[i + length - 1];
      if (dp[i][i + length - 1]) {
        n += 1;
      }
    }
  }
  return n;
};
