/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const INF = 2 ** 31 - 1;

const isValidIJ = (i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
};

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
  while (queue.length) {
    const [[i, j], d] = queue.shift();
    rooms[i][j] = Math.min(rooms[i][j], d);
    for (const [di, dj] of dirs) {
      if (isValidIJ(i + di, j + dj, m, n) && rooms[i + di][j + dj] >= INF) {
        queue.push([[i + di, j + dj], d + 1]);
      }
    }
  }
};
