/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
