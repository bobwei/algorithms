/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const output = [];
  let [top, right, bottom, left] = [0, n - 1, m - 1, 0];
  for (let i = 0, j = 0, k = 0; k < total; ) {
    while (j <= right && k < total) {
      output.push(matrix[i][j]);
      j += 1;
      k += 1;
    }
    top += 1;
    [i, j] = [top, right];
    while (i <= bottom && k < total) {
      output.push(matrix[i][j]);
      i += 1;
      k += 1;
    }
    right -= 1;
    [i, j] = [bottom, right];
    while (j >= left && k < total) {
      output.push(matrix[i][j]);
      j -= 1;
      k += 1;
    }
    bottom -= 1;
    [i, j] = [bottom, left];
    while (i >= top && k < total) {
      output.push(matrix[i][j]);
      i -= 1;
      k += 1;
    }
    left += 1;
    [i, j] = [top, left];
  }
  return output;
};
