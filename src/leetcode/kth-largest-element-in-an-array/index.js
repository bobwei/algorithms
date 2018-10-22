/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const partition = (arr, start, end) => {
  if (start >= end) {
    return end;
  }
  const p = arr[end];
  let j = start;
  for (let i = start; i <= end - 1; i++) {
    if (arr[i] >= p) {
      swap(arr, i, j);
      j += 1;
    }
  }
  swap(arr, end, j);
  return j;
};

const findKthLargest = function(nums, k, start = 0, end = nums.length - 1) {
  const p = partition(nums, start, end);
  if (k === p + 1) {
    return nums[p];
  }
  return k < p + 1 ? findKthLargest(nums, k, start, p - 1) : findKthLargest(nums, k, p + 1, end);
};

export default findKthLargest;
