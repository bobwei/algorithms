/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      if (s.substring(i - word.length, i) === word) {
        dp[i] |= dp[i - word.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[s.length];
};
