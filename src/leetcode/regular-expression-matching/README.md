## README

## Test Cases

```js
s = 'ab';
p = 'c*a*b*';
```

## Algorithm

- `dp[i][j]`: Is match for string `s.slice(0, i)` and `p.slice(0, j)`

<!-- prettier-ignore -->
```js
  dp[i][j] = (() => {
    if (p[j - 1] === '*') {
      return (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j] ||
        dp[i][j - 2];
    }
    return s[i] === p[j] || p[j] === '.' && dp[i - 1][j - 1];
  })()
```

## Boundary Conditions

- `dp[0][0] = true` because empty string is matched with empty pattern.
- `dp[0][j] = p[j - 1] === '*' && dp[i][j - 2]` because empty string is only matched with empty pattern.

```js
// Start from j = 2 because '*' is always after some character. So it can't be the first character.
for (let j = 2; j <= n; j++) {
  dp[0][j] = p[j - 1] === '*' && dp[0][j - 2];
}
```
