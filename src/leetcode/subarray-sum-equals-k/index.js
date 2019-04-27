/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const prefixSum = { 0: 1 };
  let sum = 0;
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - k in prefixSum) {
      output += prefixSum[sum - k];
    }
    prefixSum[sum] = (prefixSum[sum] || 0) + 1;
  }
  return output;
};
