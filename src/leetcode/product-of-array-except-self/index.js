/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = new Array(nums.length);
  let x = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = x;
    x *= nums[i];
  }
  x = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= x;
    x *= nums[i];
  }
  return output;
};
