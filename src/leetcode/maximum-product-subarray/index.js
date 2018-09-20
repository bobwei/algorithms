/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  fmax(i) = Math.max(
    arr[i],
    arr[i] * x,
    arr[i] * y,
  )
  fmin(i) = Math.min(
    arr[i],
    arr[i] * x,
    arr[i] * y,
  )
*/

const maxProduct = function(nums) {
  let x = nums[0];
  let y = nums[0];
  let max = x;
  for (let i = 1; i < nums.length; i++) {
    const _x = Math.max(nums[i], nums[i] * x, nums[i] * y);
    const _y = Math.min(nums[i], nums[i] * x, nums[i] * y);
    x = _x;
    y = _y;
    max = Math.max(max, x);
  }
  return max;
};

export default maxProduct;
