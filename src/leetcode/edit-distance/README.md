## README

### Algorithm

```js
s = 'ab';
t = 'abc';

s = 'abc';
t = 'ab';

s = 'abd';
t = 'abc';
```

```js
dp[i][j] = (() => {
  if (word1[i - 1] !== word2[j - 1]) {
    return Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 1);
  }
  return dp[i - 1][j - 1];
})();
```
