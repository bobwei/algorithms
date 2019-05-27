/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let dp = [...new Array(n + 1)].map((_, i) => i);
  for (let i = 1; i <= m; i++) {
    const arr = new Array(n + 1).fill(0);
    arr[0] = i;
    for (let j = 1; j <= n; j++) {
      // prettier-ignore
      arr[j] = word1[i - 1] === word2[j - 1]
        ? dp[j - 1]
        : Math.min(arr[j - 1] + 1, dp[j] + 1, dp[j - 1] + 1);
    }
    dp = arr;
  }
  return dp[n];
};
