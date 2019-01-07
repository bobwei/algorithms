/**
 * @param {character[][]} grid
 * @return {number}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (grid, visited, i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return;
  }
  if (visited[i][j] || grid[i][j] === '0') {
    return;
  }
  visited[i][j] = true;
  for (let d = 0; d < dirs.length; d++) {
    const [di, dj] = dirs[d];
    dfs(grid, visited, i + di, j + dj, m, n);
  }
};

var numIslands = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        dfs(grid, visited, i, j, m, n);
        count += 1;
      }
    }
  }
  return count;
};
