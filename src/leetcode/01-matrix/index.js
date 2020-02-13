/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dist = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  // prettier-ignore
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(m, n, i, j) && dist[x][y] + 1 < dist[i][j]) {
        dist[i][j] = dist[x][y] + 1;
        queue.push([i, j]);
      }
    }
  }
  return dist;
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
