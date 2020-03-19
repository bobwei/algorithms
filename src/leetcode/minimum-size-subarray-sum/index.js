/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let sum = 0;
  let start = 0;
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      min = Math.min(min, i - start + 1);
      sum -= nums[start];
      start += 1;
    }
  }
  return min < Infinity ? min : 0;
};
