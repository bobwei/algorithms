/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const isPostFix = (s, i, w) => {
  return s.slice(i - w.length, i) === w;
};

var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const w = wordDict[j];
      if (isPostFix(s, i, w)) {
        dp[i] = dp[i] || dp[i - w.length];
        if (dp[i]) break;
      }
    }
  }
  return dp[s.length];
};
