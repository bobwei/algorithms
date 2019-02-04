/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const sums = { 0: 1 };
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - k in sums) {
      count += sums[sum - k];
    }
    sums[sum] = (sums[sum] || 0) + 1;
  }
  return count;
};
