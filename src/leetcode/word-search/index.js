/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length || !board[0].length || !word) {
    return false;
  }
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, m, n, word, [i, j])) {
        return true;
      }
    }
  }
  return false;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const empty = '';

function dfs(board, m, n, word, [x, y], index = 0) {
  if (!isValid(x, y, m, n) || board[x][y] === empty || word[index] !== board[x][y]) {
    return false;
  }
  if (index + 1 >= word.length) {
    return true;
  }
  const c = board[x][y];
  board[x][y] = empty;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (dfs(board, m, n, word, [i, j], index + 1)) {
      return true;
    }
  }
  board[x][y] = c;
  return false;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function encode(p) {
  return p + '';
}
