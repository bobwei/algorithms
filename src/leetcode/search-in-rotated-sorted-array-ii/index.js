/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return true;
    } else if (nums[mid] === nums[right]) {
      right -= 1;
    } else if (nums[mid] === nums[left]) {
      left += 1;
    } else if (
      (nums[left] < nums[mid] && target >= nums[left] && target <= nums[mid]) ||
      (nums[mid] < nums[right] && !(target >= nums[mid] && target <= nums[right]))
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
