/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  const prefixSum = new Array(m).fill(null).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      prefixSum[i][j] = (prefixSum[i][j - 1] || 0) + matrix[i][j];
    }
  }
  const arr = new Array(m).fill(0);
  let nSumTarget = 0;
  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      for (let i = 0; i < m; i++) {
        arr[i] = prefixSum[i][right] - (prefixSum[i][left - 1] || 0);
      }
      nSumTarget += count(arr, target);
    }
  }
  return nSumTarget;
};

function count(arr, target) {
  const freq = { 0: 1 };
  let sum = 0;
  let nSumTarget = 0;
  for (const num of arr) {
    sum += num;
    nSumTarget += freq[sum - target] || 0;
    freq[sum] = (freq[sum] || 0) + 1;
  }
  return nSumTarget;
}
