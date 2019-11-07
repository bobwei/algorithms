/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const prefixSum = { 0: 1 };
  let count = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    count += prefixSum[sum - k] || 0;
    prefixSum[sum] = (prefixSum[sum] || 0) + 1;
  }
  return count;
};
