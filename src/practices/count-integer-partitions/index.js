function countIntegerPartitions(n) {
  const sum = new Array(n + 1).fill(0);
  sum[1] = 1;
  for (let i = 2; i <= n; i++) {
    const min = Math.floor(i / 2);
    sum[i] = sum[i - 1] - sum[min - 1];
  }
  return sum[n];
}
