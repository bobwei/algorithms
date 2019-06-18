/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const start = lowerBound(nums, target);
  if (start >= nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  const end = lowerBound(nums, target + 1) - 1;
  return [start, end];
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
