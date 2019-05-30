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
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  let output = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        dfs(grid, m, n, [i, j], visited);
        output += 1;
      }
    }
  }
  return output;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, p, visited) {
  visited[p[0]][p[1]] = true;
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if (isValid(i, j, m, n) && !visited[i][j] && grid[i][j] === '1') {
      dfs(grid, m, n, [i, j], visited);
    }
  }
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
