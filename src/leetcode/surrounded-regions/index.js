/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const m = board.length;
  const n = board[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && !visited[i][j]) {
        const path = [];
        if (!dfs(board, m, n, [i, j], visited, path)) {
          mutate(board, path, 'X');
        }
      }
    }
  }
};

function mutate(board, path, value) {
  for (const [i, j] of path) {
    board[i][j] = value;
  }
}

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(board, m, n, p, visited, path) {
  path.push(p);
  visited[p[0]][p[1]] = true;
  let result = false;
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if (
      !isValid(i, j, m, n) ||
      (!visited[i][j] && board[i][j] === 'O' && dfs(board, m, n, [i, j], visited, path))
    ) {
      result = true;
    }
  }
  return result;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
