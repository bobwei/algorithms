/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  [-4, -1, -1, -1, -1, 0, 0, 0, 1, 1]
*/

const threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1]) {
          left += 1;
        }
        right -= 1;
        while (nums[right] === nums[right + 1]) {
          right -= 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      }
    }
  }
  return output;
};

export default threeSum;
