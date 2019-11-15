# README

- [README](#readme)
  - [Algorithm of dp[n][i]](#algorithm-of-dpni)

## Algorithm of dp[n][i]

Define `dp[n][i]` as max profit with `n` transactions in total and have a transaction at position `i`.

```js
dp[n][i] = dp[n - 1][j] + prices[i] - prices[j], for j from 0 to i
         = prices[i] + dp[n - 1][j] - prices[j], for j from 0 to i
max = dp[n - 1][j] - prices[j]
=> dp[n][i] = prices[i] + max, for j from 0 to i
```

A naive solution would look like this:

```js
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  let dp = new Array(m).fill(0);
  for (let n = 1; n <= k; n++) {
    const next = new Array(m).fill(0);
    for (let i = 1; i < m; i++) {
      const max = findMax(dp, prices, 1, i);
      next[i] = Math.max(next[i - 1], prices[i] + max);
    }
    dp = next;
  }
  return Math.max(...dp, 0);
};

function findMax(dp, prices, start, end) {
  let max = dp[0] - prices[0];
  for (let i = start; i <= end; i++) {
    max = Math.max(max, dp[i - 1] - prices[i]);
  }
  return max;
}
```

This takes O(kmm) in time.

If we observe further, we may find that `max` value has been computed repeatly. For every iteration, only one new value is added, we can use it to update `max` value instead of recomputing.

```js
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  let dp = new Array(m).fill(0);
  for (let n = 1; n <= k; n++) {
    const next = new Array(m).fill(0);
    let max = dp[0] - prices[0];
    for (let i = 1; i < m; i++) {
      max = Math.max(max, dp[i - 1] - prices[i]);
      next[i] = Math.max(next[i - 1], prices[i] + max);
    }
    dp = next;
  }
  return Math.max(...dp, 0);
};
```

In this way, we can reduce time to O(km)

Time Complexity: O(km)
Space Complexity: O(m)
