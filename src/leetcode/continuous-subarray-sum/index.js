/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = sum % k;
    if (r in map && i - map[r] >= 2) {
      return true;
    }
    if (!(r in map)) {
      map[r] = i;
    }
  }
  return false;
};
