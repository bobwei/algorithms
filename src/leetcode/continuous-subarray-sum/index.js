/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) {
      return true;
    }
  }
  if (!k) {
    return false;
  }
  k = Math.abs(k);
  const sums = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sums[sum] === undefined) {
      sums[sum] = i;
    }
    let n = Math.floor(sum / k);
    while (n >= 1) {
      if (sums[sum - n * k] !== undefined && i - sums[sum - n * k] >= 2) {
        return true;
      }
      n -= 1;
    }
  }
  return false;
};
