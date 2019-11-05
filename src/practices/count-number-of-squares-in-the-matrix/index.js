function countNumberOfSquaresInTheMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...new Array(m)].map(() => new Array(n).fill(0));
  let count = 0;
  for (let j = 0; j < n; j++) {
    const i = 0;
    dp[i][j] = matrix[i][j] === 0 ? 1 : 0;
    count += dp[i][j];
  }
  for (let i = 1; i < m; i++) {
    const j = 0;
    dp[i][j] = matrix[i][j] === 0 ? 1 : 0;
    count += dp[i][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] =
        matrix[i][j] === 0 ? Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 : 0;
      count += dp[i][j];
    }
  }
  return count;
}

export default countNumberOfSquaresInTheMatrix;
