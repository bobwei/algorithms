/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  const m = prob.length;
  const n = target;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
  dp[0][0] = 1;
  dp[1][0] = 1 - prob[0];
  dp[1][1] = prob[0];
  for (let i = 2; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] * (1 - prob[i - 1]);
    const end = Math.min(i, target);
    for (let j = 1; j <= end; j++) {
      dp[i][j] = dp[i - 1][j - 1] * prob[i - 1] + dp[i - 1][j] * (1 - prob[i - 1]);
    }
  }
  return dp[m][target];
};
