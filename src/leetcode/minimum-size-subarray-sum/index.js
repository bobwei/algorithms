/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
  let left = 0;
  let sum = 0;
  let length = 0;
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    length += 1;
    if (sum >= s) {
      while (sum >= s) {
        min = Math.min(min, length);
        sum -= nums[left];
        left += 1;
        length -= 1;
      }
    }
  }
  return min < Infinity ? min : 0;
};

export default minSubArrayLen;
