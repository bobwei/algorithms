/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (board, word, i, j, m, n, visited, index) => {
  if (index >= word.length) {
    return true;
  }
  if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[index]) {
    return false;
  }
  for (const [di, dj] of dirs) {
    visited[i][j] = true;
    if (dfs(board, word, i + di, j + dj, m, n, visited, index + 1)) {
      return true;
    }
    visited[i][j] = false;
  }
  return false;
};

var exist = function(board, word) {
  if (!board.length || !board[0].length) {
    return false;
  }
  const m = board.length;
  const n = board[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, word, i, j, m, n, visited, 0)) {
        return true;
      }
    }
  }
  return false;
};
