/**
 * @param {number[][]} grid
 * @return {number}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const isValidIJ = (i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
};

const bfs = (grid, distance, p, m, n, emptyValue) => {
  const queue = [[[p.i, p.j], 0]];
  while (queue.length) {
    const [[i, j], d] = queue.shift();
    for (const [di, dj] of dirs) {
      const y = i + di;
      const x = j + dj;
      if (isValidIJ(y, x, m, n) && grid[y][x] === emptyValue) {
        grid[y][x] -= 1;
        distance[y][x] += d + 1;
        queue.push([[y, x], d + 1]);
      }
    }
  }
};

var shortestDistance = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const distance = [...new Array(m)].map(() => new Array(n).fill(0));
  let emptyValue = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        bfs(grid, distance, { i, j }, m, n, emptyValue);
        emptyValue -= 1;
      }
    }
  }
  let min = Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === emptyValue) {
        min = Math.min(min, distance[i][j]);
      }
    }
  }
  return min < Infinity ? min : -1;
};
