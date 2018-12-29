/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (arr, target, isLowerBound) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target < arr[mid] || (target === arr[mid] && isLowerBound)) {
      right = mid;
    } else if (target > arr[mid] || (target === arr[mid] && !isLowerBound)) {
      left = mid + 1;
    }
  }
  return left;
};

var searchRange = function(nums, target) {
  const low = binarySearch(nums, target, true);
  const high = binarySearch(nums, target, false) - 1;
  return low <= high ? [low, high] : [-1, -1];
};
