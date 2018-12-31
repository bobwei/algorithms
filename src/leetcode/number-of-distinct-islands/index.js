/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  - DFS at each position if not yet visited.
  - For each DFS, return encoded path using direction.
    - Encoded path should be unique for the same shape
  - Count one if for each encoded path is unique.
*/

const dirs = [[-1, 0, 'u'], [0, 1, 'r'], [1, 0, 'b'], [0, -1, 'l']];

const dfs = (grid, visited, i, j, dir, m, n, path = [], output = []) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return output;
  }
  if (grid[i][j] === 0 || visited[i][j]) {
    return output;
  }
  visited[i][j] = true;
  path.push(dir);
  for (let k = 0; k < dirs.length; k++) {
    const [di, dj, d] = dirs[k];
    dfs(grid, visited, i + di, j + dj, d, m, n, path, output);
  }
  output.push([...path]);
  path.pop();
  return output;
};

const encode = (paths) => {
  return paths.map((p) => p.join('')).join('');
};

var numDistinctIslands = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  const hash = {};
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const result = encode(dfs(grid, visited, i, j, 's', m, n));
        if (!hash[result]) {
          hash[result] = true;
          count += 1;
        }
      }
    }
  }
  return count;
};
