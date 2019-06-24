/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate;
  let count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count += 1;
    } else if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};
