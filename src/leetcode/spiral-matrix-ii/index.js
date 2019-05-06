/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) {
    return [[1]];
  }
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  const boundary = {
    top: 1,
    right: n - 1,
    bottom: n - 1,
    left: 0,
  };
  const p = { i: 0, j: 0 };
  for (let i = 1; i < n ** 2; ) {
    while (p.j <= boundary.right) {
      matrix[p.i][p.j] = i;
      if (p.j + 1 > boundary.right) {
        boundary.right -= 1;
        break;
      }
      p.j += 1;
      i += 1;
    }
    while (p.i <= boundary.bottom) {
      matrix[p.i][p.j] = i;
      if (p.i + 1 > boundary.bottom) {
        boundary.bottom -= 1;
        break;
      }
      p.i += 1;
      i += 1;
    }
    while (p.j >= boundary.left) {
      matrix[p.i][p.j] = i;
      if (p.j - 1 < boundary.left) {
        boundary.left += 1;
        break;
      }
      p.j -= 1;
      i += 1;
    }
    while (p.i >= boundary.top) {
      matrix[p.i][p.j] = i;
      if (p.i - 1 < boundary.top) {
        boundary.top += 1;
        break;
      }
      p.i -= 1;
      i += 1;
    }
  }
  return matrix;
};
