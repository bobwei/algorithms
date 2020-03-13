/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let nClosedIsland = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 && helper(grid, m, n, i, j)) {
        nClosedIsland += 1;
      }
    }
  }
  return nClosedIsland;
};

// prettier-ignore
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function helper(grid, m, n, x, y) {
  grid[x][y] = 1;
  let isClosed = true;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    isClosed &= isValid(m, n, i, j) && (grid[i][j] === 1 || helper(grid, m, n, i, j));
  }
  return isClosed;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
