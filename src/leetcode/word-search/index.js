/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dfs = (board, word, index, i, j, selected) => {
  if (index >= word.length) {
    return true;
  }
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
    return false;
  }
  if (selected[i][j]) {
    return false;
  }
  if (word[index] === board[i][j]) {
    selected[i][j] = true;
    if (
      dfs(board, word, index + 1, i - 1, j, selected) ||
      dfs(board, word, index + 1, i, j + 1, selected) ||
      dfs(board, word, index + 1, i + 1, j, selected) ||
      dfs(board, word, index + 1, i, j - 1, selected)
    ) {
      return true;
    }
  }
  selected[i][j] = false;
  return false;
};

var exist = function(board, word) {
  const selected = [...new Array(board.length)].map(() => new Array(board[0].length).fill(false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, word, 0, i, j, selected)) {
          return true;
        }
      }
    }
  }
  return false;
};
