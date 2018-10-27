/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const dp = [...new Array(A.length)].map(() => new Array(B.length).fill(0));
  for (let i = 0; i < B.length; i++) {
    dp[0][i] = A[0] === B[i] ? 1 : 0;
  }
  for (let i = 0; i < A.length; i++) {
    dp[i][0] = A[i] === B[0] ? 1 : 0;
  }
  let max = -Infinity;
  for (let i = 1; i < A.length; i++) {
    for (let j = 1; j < B.length; j++) {
      dp[i][j] = A[i] === B[j] ? dp[i - 1][j - 1] + 1 : 0;
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
