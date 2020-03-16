/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const arr = [];
  let output = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const index = lowerBound(arr, target - nums[i]);
    const closet = getCloset(target - nums[i], arr[index - 1], arr[index], arr[index + 1]);
    output = getCloset(target, output, closet + nums[i]);
    for (let j = 0; j < i; j++) {
      const sum = nums[j] + nums[i];
      const k = lowerBound(arr, sum);
      arr.splice(k, 0, sum);
    }
  }
  return output;
};

function getCloset(target, ...arr) {
  let output = Infinity;
  for (const num of arr) {
    if (Math.abs(num - target) < Math.abs(output - target)) {
      output = num;
    }
  }
  return output;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
