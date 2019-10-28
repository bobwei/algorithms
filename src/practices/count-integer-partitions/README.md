# README

### Question

https://leetcode.com/discuss/interview-question/414064/Google-or-Count-Integer-Partitions

Given a positive integer n, find out how many ways of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

**Example**:

```
Input: 5
Output: 6
Explanation:
1. 1 + 1 + 1 + 1 + 1
2. 1 + 1 + 1 + 2
3. 1 + 1 + 3
4. 1 + 4
5. 1 + 2 + 2
6. 2 + 3
```

### Algorithm

```js
dp[6] = dp[5] + dp[4] + dp[3];
```

```js
dp[i] = dp[j] + dp[j - 1] + ... dp[min]
min = Math.floor(i / 2)
```

`Two sums that differ only in the order of their summands are considered the same partition.` So j goes from `i - 1` to `min`

Also we can optimize `dp[i] = dp[j] + dp[j - 1] + ... dp[min]` by using prefix sum.

```js
function countIntegerPartitions(n) {
  const sum = new Array(n + 1).fill(0);
  sum[1] = 1;
  for (let i = 2; i <= n; i++) {
    const min = Math.floor(i / 2);
    sum[i] = sum[i - 1] - sum[min - 1];
  }
  return sum[n];
}
```
