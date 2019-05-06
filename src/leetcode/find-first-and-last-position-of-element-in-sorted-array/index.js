/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const low = binarySearch(nums, target, 'low');
  const high = binarySearch(nums, target, 'high');
  return low <= high ? [low, high] : [-1, -1];
};

function binarySearch(arr, target, type) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target < arr[mid] || (target === arr[mid] && type === 'low')) {
      right = mid - 1;
    } else if (target > arr[mid] || (target === arr[mid] && type === 'high')) {
      left = mid + 1;
    }
  }
  return type === 'low' ? left : left - 1;
}
