/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const arr = new Array(nums.length);
  arr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] * nums[i];
  }
  let x = 1;
  for (let j = nums.length - 1; j > 0; j--) {
    arr[j] = arr[j - 1] * x;
    x = x * nums[j];
  }
  arr[0] = x;
  return arr;
};

export default productExceptSelf;
