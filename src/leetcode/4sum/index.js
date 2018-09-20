/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/* [-4, -4, -1, -1, -1, -1, 0, 0, 0, 1, 2, 2, 2] 0 */
/* [-2, -1, 0, 0, 1, 2] 0 */

const getSum = (arrIndex, arr) => {
  return arrIndex.reduce((acc, cur) => acc + arr[cur], 0);
};

const toArr = (arrIndex, arr) => {
  return arrIndex.map((i) => arr[i]);
};

const fn = (
  nums,
  target,
  nSums = 4,
  startIndex = 0,
  selectedIndex = [],
  output = [],
) => {
  if (selectedIndex.length + 2 >= nSums) {
    let j = startIndex;
    let k = nums.length - 1;
    while (j < k) {
      const sum = getSum(selectedIndex, nums) + nums[j] + nums[k];
      if (sum === target) {
        output.push([...toArr(selectedIndex, nums), nums[j], nums[k]]);
        j += 1;
        k -= 1;
        while (nums[k] === nums[k + 1]) {
          k -= 1;
        }
        while (nums[j] === nums[j - 1]) {
          j += 1;
        }
      } else if (sum > target) {
        k -= 1;
      } else if (sum < target) {
        j += 1;
      }
    }
    return output;
  }
  for (let i = startIndex; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1] && selectedIndex.indexOf(i - 1) <= -1) {
      continue;
    }
    selectedIndex.push(i);
    fn(nums, target, nSums, i + 1, selectedIndex, output);
    selectedIndex.pop();
  }
  return output;
};

const fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  return fn(nums, target);
};

export default fourSum;
