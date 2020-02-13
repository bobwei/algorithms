/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  if (!rooms.length || !rooms[0].length) {
    return;
  }
  const m = rooms.length;
  const n = rooms[0].length;
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push([[i, j], 0]);
      }
    }
  }
  // prettier-ignore
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  while (queue.length) {
    const [[x, y], d] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(m, n, i, j) && d + 1 < rooms[i][j]) {
        rooms[i][j] = d + 1;
        queue.push([[i, j], d + 1]);
      }
    }
  }
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
