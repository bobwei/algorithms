/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
  f(n) = Math.min{f(n - coins[i]) + 1} for i in coins

  coins = [2, 5]
  f(1) = Math.min{f(1 - 2) + 1, f(1 - 5) + 1}
       = 1
*/
const coinChange = function(coins, amount) {
  if (!amount) {
    return 0;
  }
  if (!coins.length) {
    return -1;
  }
  const f = new Array(amount + 1).fill(Infinity);
  f[0] = 0;
  for (let n = 0; n <= amount; n++) {
    for (let i = 0; i < coins.length; i++) {
      if (n - coins[i] >= 0) {
        f[n] = Math.min(f[n], f[n - coins[i]] + 1);
      }
    }
  }
  return f[amount] < Infinity ? f[amount] : -1;
};

export default coinChange;
