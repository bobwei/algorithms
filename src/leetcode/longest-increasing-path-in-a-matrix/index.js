/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const length = [...new Array(m)].map(() => new Array(n).fill(0));
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(matrix, [i, j], m, n, length));
    }
  }
  return max;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(matrix, [x, y], m, n, length) {
  if (length[x][y] > 0) {
    return length[x][y];
  }
  length[x][y] = 1;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && matrix[x][y] < matrix[i][j]) {
      length[x][y] = Math.max(length[x][y], dfs(matrix, [i, j], m, n, length) + 1);
    }
  }
  return length[x][y];
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
