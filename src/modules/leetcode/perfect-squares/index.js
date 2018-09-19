/**
 * @param {number} n
 * @return {number}
 */

/*
  f(i) = Math.min{f(j^2) + f(i - j^2)} for j in i, break if j^2 > i
  f(1) = 1;
  f(2) = 2;
  f(3) = Math.min{f(1) + f(2)} = 3
*/

const numSquares = function(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (i * i > n) {
      break;
    }
    dp[i * i] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j * j > i) {
        break;
      }
      const val = dp[j * j] + dp[i - j * j];
      dp[i] = Math.min(dp[i], val);
    }
  }
  return dp[n];
};

export default numSquares;
