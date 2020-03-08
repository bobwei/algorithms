/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let dp = {};
  dp[nums[0]] = (dp[nums[0]] || 0) + 1;
  dp[-nums[0]] = (dp[-nums[0]] || 0) + 1;
  for (let i = 1; i < nums.length; i++) {
    const next = {};
    for (const key in dp) {
      const preSum = parseInt(key);
      const freq = dp[preSum];
      const sum0 = preSum + nums[i];
      next[sum0] = (next[sum0] || 0) + freq;
      const sum1 = preSum - nums[i];
      next[sum1] = (next[sum1] || 0) + freq;
    }
    dp = next;
  }
  return dp[S] || 0;
};
