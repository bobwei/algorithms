/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let left = 0;
  let right = 0;
  for (let i = nums.length - 1; i >= 1; i--) {
    right += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (left === right) {
      return i;
    }
    left += nums[i];
    right -= nums[i + 1] || 0;
  }
  return -1;
};
