/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const createSubset = (arr, index, length, selected = [], selectedIndex = {}, output = []) => {
  if (selected.length >= length) {
    output.push([...selected]);
    return output;
  }
  for (let i = index; i < arr.length; i++) {
    if (selectedIndex[i]) {
      continue;
    }
    if (arr[i] === arr[i - 1] && !selectedIndex[i - 1]) {
      continue;
    }
    selectedIndex[i] = true;
    selected.push(arr[i]);
    createSubset(arr, i + 1, length, selected, selectedIndex, output);
    selectedIndex[i] = false;
    selected.pop();
  }
  return output;
};

var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  const output = [[]];
  for (let length = 1; length <= nums.length; length++) {
    const result = createSubset(nums, 0, length);
    output.push(...result);
  }
  return output;
};
