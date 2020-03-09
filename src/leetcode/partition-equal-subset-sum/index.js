/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 2 > 0) {
    return false;
  }
  nums.sort((a, b) => b - a);
  return helper(nums, 0, 0, totalSum);
};

function helper(nums, index, sum, totalSum, memo = {}) {
  const key = index + ':' + sum;
  if (key in memo) {
    return memo[key];
  }
  if (!(sum <= totalSum / 2)) {
    memo[key] = false;
    return memo[key];
  }
  if (index >= nums.length || sum === totalSum / 2) {
    memo[key] = sum === totalSum / 2;
    return memo[key];
  }
  for (let i = index; i < nums.length; i++) {
    if (helper(nums, i + 1, sum + nums[i], totalSum, memo)) {
      memo[key] = true;
      return memo[key];
    }
  }
  memo[key] = false;
  return memo[key];
}
