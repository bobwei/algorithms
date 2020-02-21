/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const m = arr.length;
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(Infinity));
  for (let i = 0; i < m; i++) {
    dp[i][i] = 0;
  }
  for (let length = 2; length <= m; length++) {
    for (let i = 0; i <= m - length; i++) {
      const j = i + length - 1;
      for (let k = i; k < j; k++) {
        const val =
          dp[i][k] +
          dp[k + 1][j] +
          Math.max(...arr.slice(i, k + 1)) * Math.max(...arr.slice(k + 1, j + 1));
        dp[i][j] = Math.min(dp[i][j], val);
      }
    }
  }
  return dp[0][m - 1];
};
