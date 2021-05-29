/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = new Array(nums.length).fill(1);
  let p = nums[0];
  for (let i = 1; i < nums.length; i++) {
    output[i] *= p;
    p *= nums[i];
  }
  p = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    output[i] *= p;
    p *= nums[i];
  }
  return output;
};
