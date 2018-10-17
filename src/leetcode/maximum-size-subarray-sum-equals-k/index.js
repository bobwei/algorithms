/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  const cache = new Map([[0, -1]]);
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (cache.has(sum - k)) {
      max = Math.max(max, i - cache.get(sum - k));
    }
    if (!cache.has(sum)) {
      cache.set(sum, i);
    }
  }
  return max > -Infinity ? max : 0;
};
