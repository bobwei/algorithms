# README

## Algorithm

```js
dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
next[j] = Math.min(next[j - 1], dp[j], dp[j - 1]) + 1;
```
