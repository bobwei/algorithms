/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
  f(n) = f(n) || {f(n - wordDict[i].length)} for i in wordDict if postfix matched

  "applepenapple"
  ["apple", "pen"]
*/

const isPostFix = (str, n, target) => {
  if (n < target.length) {
    return false;
  }
  return str.slice(n - target.length, n - target.length + target.length) === target;
};

const wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (isPostFix(s, i, wordDict[j])) {
        dp[i] = dp[i] || dp[i - wordDict[j].length];
      }
    }
  }
  return dp[s.length];
};

export default wordBreak;
