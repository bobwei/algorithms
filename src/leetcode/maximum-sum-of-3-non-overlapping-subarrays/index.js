/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const m = nums.length;
  const subArrSum = createSubArrSum(nums, m, k);
  const left = createLeft(m, k, subArrSum);
  const right = createRight(m, k, subArrSum);
  let output;
  let max = -Infinity;
  for (let i = k; i <= m - k - 1; i++) {
    const sum = subArrSum[left[i - 1]] + subArrSum[i] + subArrSum[right[i + k]];
    if (sum > max) {
      max = sum;
      output = [left[i - 1], i, right[i + k]];
    }
  }
  return output;
};

function createRight(m, k, subArrSum) {
  const right = new Array(m).fill(m - 1);
  right[m - k] = m - k;
  for (let i = m - k - 1; i >= 0; i--) {
    right[i] = subArrSum[i] >= subArrSum[right[i + 1]] ? i : right[i + 1];
  }
  return right;
}

function createLeft(m, k, subArrSum) {
  const left = new Array(m).fill(0);
  left[k - 1] = 0;
  for (let i = k; i < m; i++) {
    left[i] = subArrSum[i - k + 1] > subArrSum[left[i - 1]] ? i - k + 1 : left[i - 1];
  }
  return left;
}

function createSubArrSum(nums, m, k) {
  const subArrSum = new Array(m).fill(0);
  subArrSum[0] = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  for (let i = 1; i <= m - k; i++) {
    subArrSum[i] = subArrSum[i - 1] + nums[i + k - 1] - nums[i - 1];
  }
  return subArrSum;
}
