/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let output = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      output = Math.abs(sum - target) < Math.abs(output - target) ? sum : output;
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  return output;
};
