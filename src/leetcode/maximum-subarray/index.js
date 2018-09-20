/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  f(i) = Math.max(
    arr[i],
    f(i - 1) + arr[i],
  )
  f(0) = arr[0]
*/
const maxSubArray = function(nums) {
  let max = nums[0];
  let output = max;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max + nums[i]);
    output = Math.max(max, output);
  }
  return output;
};

export default maxSubArray;
