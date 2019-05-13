/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const [max, sum] = findMaxAndSum(nums);
  return binarySearch(nums, m, max, sum);
};

function findMaxAndSum(nums) {
  let max = -Infinity;
  let sum = 0;
  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }
  return [max, sum];
}

function binarySearch(nums, m, min, max) {
  let left = min;
  let right = max;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (isValid(nums, m, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function isValid(nums, m, max) {
  let sum = 0;
  let count = 1;
  for (const num of nums) {
    sum += num;
    if (sum > max) {
      sum = num;
      count += 1;
      if (count > m) {
        return false;
      }
    }
  }
  return true;
}
