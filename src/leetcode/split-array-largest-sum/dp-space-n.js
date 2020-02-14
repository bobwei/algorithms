/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
/*
dp[m][i] = Math.min(dp[m][i], dp[m - 1][j] + prefixSum[i] - prefixSum[j])
next[i] = Math.min(next[i], dp[j] + prefixSum[i] - prefixSum[j]);
*/
var splitArray = function(nums, M) {
  const n = nums.length;
  const prefixSum = createPrefixSum(nums);
  let dp = [...prefixSum];
  for (let m = 2; m <= M; m++) {
    const next = new Array(n).fill(Infinity);
    next[0] = dp[0];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        const val = Math.max(dp[j], prefixSum[i] - prefixSum[j]);
        next[i] = Math.min(next[i], val);
      }
    }
    dp = next;
  }
  return Math.max(...dp);
};

function createPrefixSum(nums) {
  const prefixSum = new Array(nums.length).fill(0);
  prefixSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  return prefixSum;
}
