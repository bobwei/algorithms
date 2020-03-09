/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 2 > 0) {
    return false;
  }
  let dp = new Set([0, nums[0]]);
  for (let i = 1; i < nums.length; i++) {
    const next = new Set();
    for (const num of dp) {
      next.add(num + nums[i]);
      next.add(num);
    }
    if (next.has(totalSum / 2)) {
      return true;
    }
    dp = next;
  }
  return false;
};
