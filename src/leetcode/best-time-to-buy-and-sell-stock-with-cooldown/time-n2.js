/**
 * @param {number[]} prices
 * @return {number}
 */
/*
  dp[i] = Math.max(dp[i], prices[i] - prices[j] + dp[j - 2])
*/
var maxProfit = function(prices) {
  const m = prices.length;
  const dp = new Array(m).fill(0);
  for (let i = 1; i < m; i++) {
    dp[i] = dp[i - 1];
    for (let j = 0; j < i; j++) {
      const val = prices[i] - prices[j] + (j - 2 >= 0 ? dp[j - 2] : 0);
      dp[i] = Math.max(dp[i], val);
    }
  }
  return Math.max(...dp, 0);
};
