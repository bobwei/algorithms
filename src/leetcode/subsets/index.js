/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const helper = (arr, start, length, selected = [], output = []) => {
  if (selected.length >= length) {
    output.push([...selected]);
    return output;
  }
  for (let i = start; i < arr.length; i++) {
    selected.push(arr[i]);
    helper(arr, i + 1, length, selected, output);
    selected.pop();
  }
  return output;
};

var subsets = function(nums) {
  const output = [[]];
  for (let length = 1; length <= nums.length; length++) {
    output.push(...helper(nums, 0, length));
  }
  return output;
};
