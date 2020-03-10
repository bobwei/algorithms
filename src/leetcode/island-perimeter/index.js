/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  // prettier-ignore
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let length = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        for (const [di, dj] of dirs) {
          const x = i + di;
          const y = j + dj;
          length += !isValid(m, n, x, y) || grid[x][y] === 0 ? 1 : 0;
        }
      }
    }
  }
  return length;
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
