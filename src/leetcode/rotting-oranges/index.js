/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let nMinutes = 0;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [di, dj] of dirs) {
        const i = x + di;
        const j = y + dj;
        if (isValid(m, n, i, j) && grid[i][j] === 1) {
          grid[i][j] = 2;
          next.push([i, j]);
        }
      }
    }
    queue = next;
    if (next.length) {
      nMinutes += 1;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return nMinutes;
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
