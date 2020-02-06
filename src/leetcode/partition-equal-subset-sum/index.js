/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  if (total % 2 === 1) {
    return false;
  }
  nums.sort((a, b) => a - b);
  return helper(nums, total / 2, total);
};

function helper(nums, target, remaining, start = 0) {
  if (target <= 0) {
    return target === 0;
  }
  if (remaining < target) {
    return false;
  }
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    if (helper(nums, target - nums[i], remaining - nums[i], i + 1)) {
      return true;
    }
  }
  return false;
}
