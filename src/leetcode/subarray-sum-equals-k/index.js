/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const freq = { 0: 1 };
  let output = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    output += freq[sum - k] || 0;
    freq[sum] = (freq[sum] || 0) + 1;
  }
  return output;
};
