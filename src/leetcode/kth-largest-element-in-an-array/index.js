/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const p = partition(nums, left, right);
    if (k === p + 1) {
      return nums[p];
    } else if (k > p + 1) {
      left = p + 1;
    } else {
      right = p;
    }
  }
};

function partition(arr, start, end, compare = (a, b) => b - a) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (compare(arr[i], arr[p]) <= 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[p], arr[j]] = [arr[j], arr[p]];
  return j;
}
