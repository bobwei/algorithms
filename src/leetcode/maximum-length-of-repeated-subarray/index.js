/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const m = A.length;
  const n = B.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
