/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dist = new Array(m).fill(null).map(() => new Array(n).fill(0));
  let target = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        bfs(grid, m, n, [i, j], dist, target);
        target -= 1;
      }
    }
  }
  let output = Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target) {
        output = Math.min(output, dist[i][j]);
      }
    }
  }
  return output < Infinity ? output : -1;
};

// prettier-ignore
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(grid, m, n, p, dist, target) {
  const queue = [[p, 0]];
  while (queue.length) {
    const [[i, j], d] = queue.shift();
    for (const [di, dj] of dirs) {
      const x = i + di;
      const y = j + dj;
      if (isValid(m, n, x, y) && grid[x][y] === target) {
        grid[x][y] -= 1;
        dist[x][y] += d + 1;
        queue.push([[x, y], d + 1]);
      }
    }
  }
}

function isValid(m, n, i, j) {
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return false;
  }
  return true;
}
