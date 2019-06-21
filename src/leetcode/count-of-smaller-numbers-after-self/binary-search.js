/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const m = nums.length;
  const output = [];
  const arr = [];
  for (let i = m - 1; i >= 0; i--) {
    const num = nums[i];
    const index = lowerBound(arr, num);
    output.push(index);
    arr.splice(index, 0, num);
  }
  return output.reverse();
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
