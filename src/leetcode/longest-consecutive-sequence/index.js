/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const cache = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) {
      continue;
    }
    const left = cache[nums[i] - 1];
    const right = cache[nums[i] + 1];
    const n = (left || 0) + 1 + (right || 0);
    const start = left ? nums[i] - left : nums[i];
    const end = right ? nums[i] + right : nums[i];
    for (let j = start; j <= end; j++) {
      cache[j] = n;
    }
    max = Math.max(max, cache[nums[i]]);
  }
  return max;
};
