/**
 * @param {number[]} nums
 * @return {number}
 */

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid;
    }
  }
  return left;
};

var lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < arr[0]) {
      arr[0] = nums[i];
    } else if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      const index = binarySearch(arr, nums[i]);
      arr[index] = nums[i];
    }
  }
  return arr.length;
};
