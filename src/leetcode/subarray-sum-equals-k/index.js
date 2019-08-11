/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0;
  let nSubarray = 0;
  const map = { 0: 1 };
  for (const num of nums) {
    sum += num;
    nSubarray += map[sum - k] || 0;
    map[sum] = (map[sum] || 0) + 1;
  }
  return nSubarray;
};
