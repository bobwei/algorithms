/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) {
    return 0;
  }
  const n = prices.length;
  const left = new Array(n).fill(0);
  let min = prices[0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, prices[i]);
    const p = prices[i] > min ? prices[i] - min : 0;
    left[i] = Math.max(left[i - 1] || 0, p);
  }
  const right = new Array(n).fill(0);
  let max = prices[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    const p = prices[i] < max ? max - prices[i] : 0;
    right[i] = Math.max(right[i + 1] || 0, p);
  }
  let output = 0;
  for (let i = 0; i < n; i++) {
    const p = left[i] + right[i];
    output = Math.max(output, p);
  }
  return output;
};
