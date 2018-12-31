/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const swap = (m, i1, j1, i2, j2) => {
  const tmp = m[i1][j1];
  m[i1][j1] = m[i2][j2];
  m[i2][j2] = tmp;
};

var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j > i) {
        swap(matrix, i, j, j, i);
      }
      if (j >= Math.floor(n / 2)) {
        swap(matrix, i, j, i, n - 1 - j);
      }
    }
  }
};
