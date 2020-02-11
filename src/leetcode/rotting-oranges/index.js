/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  if (!grid.length || !grid[0].length) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  let queue = getRotten(grid, m, n);
  const nFruits = count(grid, m, n);
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let nRotten = queue.length;
  let nHours = 0;
  while (queue.length) {
    if (nRotten === nFruits) {
      return nHours;
    }
    const next = [];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [di, dj] of dirs) {
        const i = x + di;
        const j = y + dj;
        if (isValid(m, n, i, j) && grid[i][j] === 1) {
          grid[i][j] = 2;
          nRotten += 1;
          next.push([i, j]);
        }
      }
    }
    nHours += 1;
    queue = next;
  }
  if (nRotten === nFruits) {
    return nHours;
  }
  return -1;
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function count(grid, m, n) {
  let nEmpty = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        nEmpty += 1;
      }
    }
  }
  return m * n - nEmpty;
}

function getRotten(grid, m, n) {
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  return queue;
}
