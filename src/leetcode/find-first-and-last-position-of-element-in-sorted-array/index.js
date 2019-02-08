/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, target, boundary) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target > nums[mid] || (target === nums[mid] && boundary === 'upper')) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (boundary === 'upper') {
    return left - 1;
  }
  return left;
};

var searchRange = function(nums, target) {
  const left = binarySearch(nums, target, 'lower');
  const right = binarySearch(nums, target, 'upper');
  return left <= right ? [left, right] : [-1, -1];
};
