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
      if (helper(board, m, n, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

const visited = 'O';
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function helper(board, m, n, x, y, word, start) {
  if (!isValid(x, y, m, n) || board[x][y] !== word[start]) {
    return false;
  }
  if (start + 1 >= word.length) {
    return true;
  }
  const tmp = board[x][y];
  board[x][y] = visited;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (helper(board, m, n, i, j, word, start + 1)) {
      return true;
    }
  }
  board[x][y] = tmp;
  return false;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
