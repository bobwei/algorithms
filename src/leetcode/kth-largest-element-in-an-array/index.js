/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const partition = (arr, start, end) => {
  const p = end;
  let j = start;
  for (let i = start; i <= end - 1; i++) {
    if (arr[i] >= arr[p]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[j], arr[p]] = [arr[p], arr[j]];
  return j;
};

var findKthLargest = function(nums, k, i = 0, j = nums.length - 1) {
  const pivot = partition(nums, i, j);
  if (pivot === k - 1) {
    return nums[pivot];
  }
  if (pivot < k - 1) {
    return findKthLargest(nums, k, pivot + 1, j);
  }
  return findKthLargest(nums, k, i, pivot - 1);
};
