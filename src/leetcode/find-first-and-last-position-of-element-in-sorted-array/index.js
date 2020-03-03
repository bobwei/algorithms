/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const left = binarySearch(nums, target, (a, b) => a <= b);
  if (nums[left] !== target) {
    return [-1, -1];
  }
  const right = binarySearch(nums, target, (a, b) => a < b);
  return [left, right - 1];
};

function binarySearch(arr, target, comparator) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
