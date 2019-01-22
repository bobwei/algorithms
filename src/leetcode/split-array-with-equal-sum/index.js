/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canSplit = (nums, sums, start, end) => {
  const output = [];
  for (let i = start; i <= end; i++) {
    const left = sums[i - 1] - (sums[start - 2] || 0);
    const right = sums[end + 1] - sums[i];
    if (left === right) {
      output.push(left);
    }
  }
  return output;
};

const hasIntersection = (arr1, arr2) => {
  const set = new Set(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      return true;
    }
  }
  return false;
};

var splitArray = function(nums) {
  const sums = new Array(nums.length).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  for (let j = 3; j < nums.length - 3; j++) {
    const left = canSplit(nums, sums, 1, j - 2);
    if (!left.length) continue;
    const right = canSplit(nums, sums, j + 2, nums.length - 2);
    if (!right.length) continue;
    if (hasIntersection(left, right)) {
      return true;
    }
  }
  return false;
};
