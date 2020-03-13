/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);
  let nSmallers = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        nSmallers += k - j;
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  return nSmallers;
};
