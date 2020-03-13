/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  const target = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        output.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j += 1;
        }
        j += 1;
        while (nums[k] === nums[k - 1]) {
          k -= 1;
        }
        k -= 1;
      } else if (sum > target) {
        k -= 1;
      } else {
        j += 1;
      }
    }
  }
  return output;
};
