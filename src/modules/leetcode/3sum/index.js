/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
  [-4, -4, -1, -1, -1, -1, 0, 0, 0, 1, 2, 2, 2]
*/

const threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]]);
        j += 1;
        k -= 1;
        while (nums[k] === nums[k + 1]) {
          k -= 1;
        }
        while (nums[j] === nums[j - 1]) {
          j += 1;
        }
      } else if (sum > 0) {
        k -= 1;
      } else if (sum < 0) {
        j += 1;
      }
    }
  }
  return output;
};

export default threeSum;
