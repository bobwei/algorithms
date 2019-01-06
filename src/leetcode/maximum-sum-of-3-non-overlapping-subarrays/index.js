/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const n = nums.length;
  const sums = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    sums[i] = nums[i];
    if (i + 1 < n) {
      sums[i] += sums[i + 1];
    }
    if (i + k < n) {
      sums[i] -= nums[i + k];
    }
  }
  const left = new Array(n).fill(null);
  left[k - 1] = 0;
  for (let i = k - 1 + 1; i < n; i++) {
    if (sums[i - k + 1] > sums[left[i - 1]]) {
      left[i] = i - k + 1;
    } else {
      left[i] = left[i - 1];
    }
  }
  const right = new Array(n).fill(null);
  right[n - k] = n - k;
  for (let i = n - k - 1; i >= 0; i--) {
    if (sums[i] > sums[right[i + 1]]) {
      right[i] = i;
    } else {
      right[i] = right[i + 1];
    }
  }
  const output = new Array(3).fill(null);
  let max = -Infinity;
  for (let i = k; i <= n - 2 * k; i++) {
    const sum = sums[left[i - 1]] + sums[i] + sums[right[i + k]];
    if (sum > max) {
      max = sum;
      output[0] = left[i - 1];
      output[1] = i;
      output[2] = right[i + k];
    }
  }
  return output;
};
