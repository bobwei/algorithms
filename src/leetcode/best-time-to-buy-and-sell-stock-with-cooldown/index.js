/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const m = prices.length;
  const woStock = [0];
  const wtStock = [-prices[0]];
  for (let i = 1; i < m; i++) {
    const j = woStock.length;
    woStock[j] = Math.max(woStock[j - 1], wtStock[j - 1] + prices[i]);
    wtStock[j] = Math.max(wtStock[j - 1], (j - 2 >= 0 ? woStock[j - 2] : 0) - prices[i]);
    woStock.splice(0, woStock.length - 3);
    wtStock.splice(0, wtStock.length - 3);
  }
  return woStock.pop();
};
