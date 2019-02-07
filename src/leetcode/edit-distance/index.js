/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(n + 1).fill(0);
  for (let j = 0; j <= n; j++) {
    dp[j] = j;
  }
  for (let i = 1; i <= m; i++) {
    let tmp = i - 1;
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      dp[j] = (() => {
        if (word1[i - 1] !== word2[j - 1]) {
          const min = Math.min(dp[j - 1] + 1, dp[j] + 1, tmp + 1);
          tmp = dp[j];
          return min;
        }
        const min = tmp;
        tmp = dp[j];
        return min;
      })();
    }
  }
  return dp[n];
};
