/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

const greedy = (prices) => {
  let output = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      output += prices[i] - prices[i - 1];
    }
  }
  return output;
};

var maxProfit = function(kTimes, prices) {
  if (!kTimes || !prices.length) {
    return 0;
  }

  const n = prices.length;
  if (kTimes >= n / 2) {
    return greedy(prices);
  }

  const dp = new Array(n).fill(0);

  let min = Infinity;
  for (let j = 0; j < n; j++) {
    min = Math.min(min, prices[j]);
    dp[j] = Math.max(dp[j - 1] || 0, prices[j] - min);
  }

  for (let k = 2; k <= kTimes; k++) {
    let maxDiff = dp[0] - prices[0];
    for (let i = 1; i < n; i++) {
      const newDiff = dp[i] - prices[i];
      dp[i] = Math.max(dp[i - 1], maxDiff + prices[i]);
      maxDiff = Math.max(maxDiff, newDiff);
    }
  }

  return dp[n - 1];
};
