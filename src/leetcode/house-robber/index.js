/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 2) {
    if (!nums.length) return 0;
    return Math.max(...nums.slice(0, 2));
  }
  let x = nums[0];
  let y = Math.max(nums[0], nums[1]);
  let output = y;
  for (let i = 2; i < nums.length; i++) {
    output = Math.max(output, x + nums[i], y);
    x = y;
    y = output;
  }
  return output;
};
