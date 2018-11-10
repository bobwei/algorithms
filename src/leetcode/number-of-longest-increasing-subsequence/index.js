/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dpLength = new Array(nums.length).fill(1);
  const dpCount = new Array(nums.length).fill(1);
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dpLength[j] + 1 > dpLength[i]) {
          dpLength[i] = dpLength[j] + 1;
          dpCount[i] = dpCount[j];
        } else if (dpLength[j] + 1 === dpLength[i]) {
          dpCount[i] += dpCount[j];
        }
      }
    }
    maxLength = Math.max(maxLength, dpLength[i]);
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dpLength[i] === maxLength) {
      count += dpCount[i];
    }
  }
  return count;
};
