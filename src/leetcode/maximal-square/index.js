/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
  dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
*/
var maximalSquare = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let dp = matrix[0].map((c) => parseInt(c));
  let max = Math.max(...dp);
  for (let i = 1; i < m; i++) {
    const arr = new Array(n).fill(0);
    arr[0] = parseInt(matrix[i][0]);
    for (let j = 1; j < n; j++) {
      // prettier-ignore
      arr[j] = matrix[i][j] === '1'
        ? Math.min(arr[j - 1], dp[j - 1], dp[j]) + 1
        : 0;
    }
    dp = arr;
    max = Math.max(max, ...dp);
  }
  return max ** 2;
};
