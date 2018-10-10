/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, left = 0, right = nums.length - 1) {
  if (left > right) {
    return 0;
  }
  const mid = Math.floor((left + right) / 2);
  if ((nums[mid - 1] || -Infinity) < nums[mid] && nums[mid] > (nums[mid + 1] || -Infinity)) {
    return mid;
  }
  if (nums[mid] < nums[mid + 1]) {
    return findPeakElement(nums, mid + 1, right) || findPeakElement(nums, left, mid - 1);
  }
  return findPeakElement(nums, left, mid - 1) || findPeakElement(nums, mid + 1, right);
};
