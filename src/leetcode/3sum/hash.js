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
    const visited = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      const num = target - nums[i] - nums[j];
      if (visited.has(num)) {
        output.push([nums[i], nums[j], num]);
        while (nums[j] === nums[j + 1]) {
          j += 1;
        }
      }
      visited.add(nums[j]);
    }
  }
  return output;
};
