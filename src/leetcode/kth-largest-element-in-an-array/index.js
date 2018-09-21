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
    return start;
  }
  const pivotIndex = end;
  const pivot = arr[pivotIndex];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] > pivot) {
      swap(arr, j, i);
      i += 1;
    }
  }
  swap(arr, i, pivotIndex);
  return i;
};

const findKthLargest = function(nums, k, i = 0, j = nums.length - 1) {
  const p = partition(nums, i, j);
  if (k === p + 1) {
    return nums[p];
  }
  return k > p + 1
    ? findKthLargest(nums, k, p + 1, j)
    : findKthLargest(nums, k, i, p - 1);
};

export default findKthLargest;
