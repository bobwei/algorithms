/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const i = firstDecrease(nums);
  if (i < 0) return nums.reverse();
  const j = exchangeIndex(nums, i);
  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(nums, i + 1);
};

function firstDecrease(nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      return i;
    }
  }
  return -1;
}

function exchangeIndex(nums, index) {
  for (let i = nums.length - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      return i;
    }
  }
  return nums.length - 1;
}

function reverse(nums, index) {
  let left = index;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left += 1;
    right -= 1;
  }
}
