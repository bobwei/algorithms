function countIntegerPartitions(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    const min = Math.floor(i / 2);
    for (let j = i - 1; j >= min; j--) {
      dp[i] += dp[j];
    }
  }
  return dp[n];
}
