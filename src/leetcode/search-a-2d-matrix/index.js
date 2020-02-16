/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const [i, j] = helper(m, n, mid);
    if (target === matrix[i][j]) {
      return true;
    } else if (target > matrix[i][j]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};

function helper(m, n, p) {
  const i = Math.floor(p / n);
  const j = p % n;
  return [i, j];
}
