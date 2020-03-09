/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 2 > 0) {
    return false;
  }
  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  dp[nums[0]] = true;
  for (let i = 1; i < nums.length; i++) {
    for (let j = target; j >= 0; j--) {
      if (dp[j - nums[i]] || dp[j - 0]) {
        dp[j] = true;
      }
    }
    if (dp[target]) {
      return true;
    }
  }
  return false;
};
