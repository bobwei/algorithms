/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const reverse = (arr, i, j = arr.length - 1) => {
  let left = i;
  let right = j;
  while (left < right) {
    swap(arr, left, right);
    left += 1;
    right -= 1;
  }
};

var nextPermutation = function(nums) {
  /* find first decreasing */
  let i = nums.length - 1;
  while (nums[i] <= nums[i - 1] && i >= 0) {
    i -= 1;
  }
  i -= 1;
  /* find to switch index */
  let j = nums.length - 1;
  while (nums[j] <= nums[i] && j >= 0) {
    j -= 1;
  }
  if (i >= 0) {
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
};
