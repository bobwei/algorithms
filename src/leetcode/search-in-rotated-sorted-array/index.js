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
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] <= nums[right]) {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
