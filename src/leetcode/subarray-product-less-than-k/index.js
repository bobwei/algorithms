/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  nums = [10, 5, 2, 6]
  k = 100
*/

var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
    return 0;
  }
  let product = 1;
  let count = 0;
  let left = 0;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    length += 1;
    while (product >= k) {
      product /= nums[left];
      left += 1;
      length -= 1;
    }
    count += length;
  }
  return count;
};
