/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const getMaxIndex = (arr, start, k) => {
  let maxIndex = start;
  for (let i = start; i < start + k; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

var maxSlidingWindow = function(nums, k) {
  if (!nums.length) {
    return [];
  }
  let maxIndex = getMaxIndex(nums, 0, k);
  const output = [nums[maxIndex]];
  for (let i = k; i < nums.length; i++) {
    if (maxIndex >= i - k + 1) {
      if (nums[i] > nums[maxIndex]) {
        output.push(nums[i]);
        maxIndex = i;
      } else {
        output.push(nums[maxIndex]);
      }
    } else {
      maxIndex = getMaxIndex(nums, i - k + 1, k);
      output.push(nums[maxIndex]);
    }
  }
  return output;
};
