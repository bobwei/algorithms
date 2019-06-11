/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const m = nums.length;
  const arr = [nums[0]];
  for (let i = 1; i < m; i++) {
    if (nums[i] < arr[0]) {
      arr[0] = nums[i];
    } else if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      const index = lowerBound(arr, nums[i]);
      arr[index] = nums[i];
    }
  }
  return arr.length;
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
