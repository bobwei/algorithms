/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);
  let p = 1;
  for (let i = 1; i < n; i++) {
    p = p * nums[i - 1];
    output[i] = p;
  }
  p = 1;
  for (let i = n - 2; i >= 0; i--) {
    p = p * nums[i + 1];
    output[i] = p * output[i];
  }
  return output;
};
