/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) {
      return true;
    }
  }
  if (k === 0) {
    return false;
  }
  k = Math.abs(k);
  const map = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = sum % k;
    if (r in map) {
      const j = map[r];
      if (i - j >= 2) {
        return true;
      }
    } else {
      map[r] = i;
    }
  }
  return false;
};
