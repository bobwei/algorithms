/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  let left = 0;
  let right = nums.length;
  let target = k;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    const nMissings = nums[mid] - nums[left] - (mid - left);
    if (target <= nMissings) {
      right = mid;
    } else {
      left = mid;
      target -= nMissings;
    }
  }
  return nums[left] + target;
};
