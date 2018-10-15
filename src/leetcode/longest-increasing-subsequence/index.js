/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Return index of the smallest element greater than target
*/
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

var lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < dp[0]) {
      dp[0] = nums[i];
    } else if (nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
    } else {
      const j = binarySearch(dp, nums[i]);
      dp[j] = nums[i];
    }
  }
  return dp.length;
};
