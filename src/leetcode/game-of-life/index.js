/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const m = board.length;
  const n = board[0].length;
  const lives = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const counts = count(board, m, n, [i, j]);
      const isAlive =
        (board[i][j] === 1 && (counts.lives >= 2 && counts.lives <= 3)) ||
        (board[i][j] === 0 && counts.lives === 3);
      if (isAlive) {
        const key = encode([m, n], [i, j]);
        lives[key] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = encode([m, n], [i, j]);
      board[i][j] = lives[key] || false;
    }
  }
};

// prettier-ignore
const dirs = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1],
];

function count(board, m, n, p) {
  const counts = {
    lives: 0,
  };
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if (i < 0 || i >= m || j < 0 || j >= n) {
      continue;
    }
    if (board[i][j] === 1) {
      counts.lives += 1;
    }
  }
  return counts;
}

function encode([m, n], [i, j]) {
  return n * i + j;
}
