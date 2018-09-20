/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length <= 1) {
    return 1;
  }
  const f = new Array(nums.length).fill(1);
  f[0] = 1;
  let max = f[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        f[i] = Math.max(f[i], f[j] + 1);
        max = Math.max(max, f[i]);
      }
    }
  }
  return max;
};

export default lengthOfLIS;
