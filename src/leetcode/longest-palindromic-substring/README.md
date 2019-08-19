# README

## Algorithm DP

```js
dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
```

Given a string s, `s.substring(i, j + 1)` is a palindrome if `s[i] === s[j]` and `s.substring(i + 1, j)` is also a palindrome.

So we can use dynamic programming and bottom up approach to solve it.

Time Complexity: O(N ** 2)
Space Complexity: O(N ** 2)
