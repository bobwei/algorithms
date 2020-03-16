/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const leftVal = mid - 1 >= 0 ? nums[mid - 1] : -Infinity;
    const rightVal = mid + 1 < nums.length ? nums[mid + 1] : -Infinity;
    if (nums[mid] > leftVal && nums[mid] > rightVal) {
      return mid;
    } else if (nums[mid] < nums[mid - 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left < nums.length ? left : left - 1;
};
