/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let j = 2; j <= n; j++) {
    dp[j] = p[j - 1] === '*' && dp[j - 2];
  }
  for (let i = 1; i <= m; i++) {
    const next = new Array(n + 1).fill(false);
    for (let j = 1; j <= n; j++) {
      next[j] = (() => {
        if (p[j - 1] === '*') {
          // prettier-ignore
          return (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[j]
            || next[j - 2];
        }
        return (s[i - 1] === p[j - 1] || p[j - 1] === '.') && dp[j - 1];
      })();
    }
    dp = next;
  }
  return dp[n];
};
