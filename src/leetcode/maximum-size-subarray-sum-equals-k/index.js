/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
/*
  [-2, -1, 2, 1]
  1
  [1,0,-1]
  -1
  sum i to j = sum[j] - sum[i - 1]
  let's call sum[i - 1] "sum previous"
  we are looking for sum previous such that sum[j] - sum previous = k
  sum previous = sum[j] - k
*/

const maxSubArrayLen = function(nums, k) {
  let max = 0;
  const sums = new Map();
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    if (sum === k) {
      max = Math.max(max, j + 1);
    } else if (sums.has(sum - k)) {
      const i = sums.get(sum - k) + 1;
      const length = j - i + 1;
      max = Math.max(max, length);
    }
    if (!sums.has(sum)) {
      sums.set(sum, j);
    }
  }
  return max;
};
