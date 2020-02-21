/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j < nums.length && nums[j + 1] === nums[j] + 1) {
      j += 1;
    }
    const str = j > i ? nums[i] + '->' + nums[j] : nums[i] + '';
    output.push(str);
    i = j;
  }
  return output;
};
