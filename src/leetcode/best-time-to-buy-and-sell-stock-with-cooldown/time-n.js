/**
 * @param {number[]} prices
 * @return {number}
 */
/*
withoutStock[i] = Math.max(withoutStock[i - 1], withStock[i - 1] + prices[i]);
withStock[i] = Math.max(withStock[i - 1], withoutStock[i - 2] - prices[i]);
*/
var maxProfit = function(prices) {
  const m = prices.length;
  const withoutStock = new Array(m).fill(0);
  const withStock = new Array(m).fill(0);
  withStock[0] = -prices[0];
  for (let i = 1; i < m; i++) {
    withoutStock[i] = Math.max(withoutStock[i - 1], withStock[i - 1] + prices[i]);
    withStock[i] = Math.max(withStock[i - 1], (i - 2 >= 0 ? withoutStock[i - 2] : 0) - prices[i]);
  }
  return withoutStock[m - 1];
};
