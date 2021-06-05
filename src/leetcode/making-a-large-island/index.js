/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const map = {};
  let index = 2;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const size = dfs(grid, m, n, i, j, index);
        map[index] = size;
        max = Math.max(max, size);
        index += 1;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const visited = new Set();
        let size = 1;
        for (const [di, dj] of dirs) {
          const x = i + di;
          const y = j + dj;
          if (isValid(m, n, x, y)) {
            const key = grid[x][y];
            if (!visited.has(index) && key in map) {
              visited.add(key);
              size += map[key];
            }
          }
        }
        max = Math.max(max, size);
      }
    }
  }
  return max;
};

// prettier-ignore
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, i, j, index) {
  if (!isValid(m, n, i, j) || grid[i][j] === index || grid[i][j] === 0) {
    return 0;
  }
  grid[i][j] = index;
  let size = 1;
  for (const [di, dj] of dirs) {
    const x = i + di;
    const y = j + dj;
    size += dfs(grid, m, n, x, y, index);
  }
  return size;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
