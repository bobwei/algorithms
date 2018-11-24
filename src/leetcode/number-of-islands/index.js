/**
 * @param {character[][]} grid
 * @return {number}
 */
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (grid, visited, m, n, i, j) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return;
  }
  if (grid[i][j] === '0' || visited[i][j]) {
    return;
  }
  visited[i][j] = true;
  for (let k = 0; k < directions.length; k++) {
    dfs(grid, visited, m, n, i + directions[k][0], j + directions[k][1]);
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
        count += 1;
        dfs(grid, visited, m, n, i, j);
      }
    }
  }
  return count;
};
