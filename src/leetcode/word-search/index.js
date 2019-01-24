/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (board, word, index, i, j, m, n, visited) => {
  if (index >= word.length) {
    return true;
  }
  if (i < 0 || i >= m || j < 0 || j >= n || word[index] !== board[i][j] || visited[i][j]) {
    return false;
  }
  visited[i][j] = true;
  for (const [di, dj] of dirs) {
    if (dfs(board, word, index + 1, i + di, j + dj, m, n, visited)) {
      return true;
    }
  }
  visited[i][j] = false;
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
      if (dfs(board, word, 0, i, j, m, n, visited)) {
        return true;
      }
    }
  }
  return false;
};
