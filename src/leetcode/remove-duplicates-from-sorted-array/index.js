/**
 * @param {number[]} nums
 * @return {number}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var removeDuplicates = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[j]) {
      continue;
    }
    j += 1;
    swap(nums, i, j);
  }
  return j + 1;
};
