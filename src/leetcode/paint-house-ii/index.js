/**
 * @param {number[][]} costs
 * @return {number}
 */
/*
  dp[i][j] = costs[i][j] + min { dp[i - 1][k], for k in costs.length and k !== j }
*/
var minCostII = function(costs) {
  if (!costs.length || !costs[0].length) {
    return 0;
  }
  const m = costs.length;
  const n = costs[0].length;
  const dp = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  for (let j = 0; j < n; j++) {
    dp[0][j] = costs[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const pre = dp[i - 1].filter((_, k) => k !== j);
      dp[i][j] = costs[i][j] + Math.min(...pre);
    }
  }
  return Math.min(...dp[m - 1]);
};
