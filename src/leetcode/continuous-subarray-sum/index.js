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
  if (!k) {
    return false;
  }
  k = Math.abs(k);
  const mods = new Map([[0, -1]]);
  let mod = 0;
  for (let i = 0; i < nums.length; i++) {
    mod = (mod + nums[i]) % k;
    if (mods.has(mod) && i - mods.get(mod) >= 2) {
      return true;
    }
    if (!mods.has(mod)) {
      mods.set(mod, i);
    }
  }
  return false;
};
