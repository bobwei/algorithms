function countIntegerPartitions2(n) {
  const dp = new Array(n + 1).fill(0);
  const sum = new Array(n + 1).fill(0);
  dp[1] = 1;
  sum[1] = 1;
  for (let i = 2; i <= n; i++) {
    const min = Math.floor(i / 2);
    dp[i] = sum[i - 1] - sum[min - 1];
    sum[i] = sum[i - 1] + dp[i];
  }
  return dp[n];
}
