/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k, start = 0, end = nums.length) {
  const i = partition(nums, start, end);
  if (k === i + 1) {
    return nums[i];
  } else if (k > i + 1) {
    return findKthLargest(nums, k, i + 1, end);
  }
  return findKthLargest(nums, k, start, i);
};

function partition(nums, start, end) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < end; i++) {
    if (nums[i] > nums[p]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j += 1;
    }
  }
  [nums[j], nums[p]] = [nums[p], nums[j]];
  return j;
}
