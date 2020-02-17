/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let minSoFar = Infinity;
  for (const price of prices) {
    minSoFar = Math.min(minSoFar, price);
    max = Math.max(max, price - minSoFar);
  }
  return max;
};
