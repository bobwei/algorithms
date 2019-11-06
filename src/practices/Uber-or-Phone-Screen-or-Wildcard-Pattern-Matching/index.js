function wildcardPatternMatching(p, s) {
  const m = p.length;
  const n = s.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = helper(p, s, i, j, dp);
    }
  }
  return dp[m][n];
}

function helper(p, s, i, j, dp) {
  if (p[i - 1] === s[j - 1]) {
    return dp[i - 1][j - 1];
  }
  if (p[i - 1] === '?') {
    return (p[i - 2] === s[j - 1] && dp[i - 2][j - 1]) || dp[i - 2][j];
  }
  return false;
}

console.log(wildcardPatternMatching('be?t', 'bet')); // true
console.log(wildcardPatternMatching('ton?e?', 'to')); // true
console.log(wildcardPatternMatching('ton?e?', 'tonne')); // false
console.log(wildcardPatternMatching('ton?e?x?', 'tonex')); // true
