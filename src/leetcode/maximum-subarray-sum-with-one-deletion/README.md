# README

## Algorithm

`dp[i][j]` represents maximum sum of subarray ending at `i` with `j` deletion.

```js
dp[i][0] = Math.max(arr[i], arr[i] + dp[i - 1][0]);
dp[i][1] = Math.max(arr[i], arr[i] + dp[i - 1][1], dp[i - 1][0]);
```

This takes O(n) spaces. It can be further optimized.

```js
next[0] = Math.max(arr[i], arr[i] + dp[0]);
next[1] = Math.max(arr[i], arr[i] + dp[1], dp[0]);
```

Space Compelxity: O(1)
