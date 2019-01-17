## README

## Test Cases

```js
s = 'adceb';
p = '*a*b';
```

## Algorithm

- `dp[i][j]`: Is match for string `s.slice(0, i)` and `p.slice(0, j)`
- `dp[i][j] = dp[k][j]` means `*` represents n characters.
- `dp[i][j] = dp[i][j - 1]` means `*` represents zero characters.

<!-- prettier-ignore -->
```js
dp[i][j] = (() => {
  if (p[j - 1] === '*') {
    for (let k = 0; k <= i - 1; k++) {
      if (dp[k][j]) {
        return true;
      }
    }
    return dp[i][j - 1];
  }
  return (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
})();
```

## Boundary Conditions

- `dp[0][0] = true` because empty string is matched with empty pattern.
- `dp[0][j] = p[j - 1] === '*' && dp[i][j - 1]` because empty string is only matched with empty pattern.
