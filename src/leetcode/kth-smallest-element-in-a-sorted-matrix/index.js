/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const m = matrix.length;
  let left = matrix[0][0];
  let right = matrix[m - 1][m - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const n = count(matrix, m, mid, (a, b) => a <= b);
    if (n < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

function count(matrix, m, target, comparator) {
  let j = m - 1;
  let n = 0;
  for (let i = 0; i < m; i++) {
    while (j >= 0 && !comparator(matrix[i][j], target)) {
      j -= 1;
    }
    n += j + 1;
  }
  return n;
}
