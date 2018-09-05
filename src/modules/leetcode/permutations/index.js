/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums, selected = [], output = []) {
  if (selected.length >= nums.length) {
    return output.push([...selected]);
  }
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (selected.indexOf(n) < 0) {
      selected.push(n);
      permute(nums, selected, output);
      selected.pop();
    }
  }
  return output;
};

export default permute;
