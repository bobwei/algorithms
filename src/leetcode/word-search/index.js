/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dfs = (board, i, j, word, index, selected) => {
  if (index >= word.length) {
    return true;
  }
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
    return false;
  }
  if (selected[i][j]) {
    return false;
  }
  if (board[i][j] !== word[index]) {
    return false;
  }
  selected[i][j] = true;
  if (
    dfs(board, i - 1, j, word, index + 1, selected) ||
    dfs(board, i, j + 1, word, index + 1, selected) ||
    dfs(board, i + 1, j, word, index + 1, selected) ||
    dfs(board, i, j - 1, word, index + 1, selected)
  ) {
    return true;
  }
  selected[i][j] = false;
};

var exist = function(board, word) {
  const selected = [...new Array(board.length)].map(() => new Array(board[0].length).fill(false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, i, j, word, 0, selected)) {
          return true;
        }
      }
    }
  }
  return false;
};
