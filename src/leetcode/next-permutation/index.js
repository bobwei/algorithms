/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const i = findFirstDesc(nums);
  if (i >= 0) {
    const j = findMinGreater(nums, i + 1, nums[i]);
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  reverse(nums, i + 1);
};

function findMinGreater(nums, start, target) {
  for (let i = nums.length - 1; i >= start; i--) {
    if (nums[i] > target) {
      return i;
    }
  }
  return -1;
}

function findFirstDesc(nums) {
  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1]) {
    i -= 1;
  }
  return i;
}

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i += 1;
    j -= 1;
  }
}
