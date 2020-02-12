/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  let nIslands = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, m, n, i, j);
        nIslands += 1;
      }
    }
  }
  return nIslands;
};

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(grid, m, n, x, y) {
  grid[x][y] = '0';
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(m, n, i, j) && grid[i][j] === '1') {
      dfs(grid, m, n, i, j);
    }
  }
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
