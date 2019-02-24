/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0;
  let end = 0;
  let f = 0;
  for (let i = 0; i <= nums.length - 2; i++) {
    f = Math.max(f, i + nums[i]);
    if (i === end) {
      steps += 1;
      end = f;
    }
  }
  return steps;
};
