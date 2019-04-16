/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  const map = { 0: -1 };
  let output = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - k in map) {
      output = Math.max(output, i - map[sum - k]);
    }
    if (!(sum in map)) {
      map[sum] = i;
    }
  }
  return output;
};
