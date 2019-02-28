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
  let top = 0;
  let right = n;
  let bottom = m;
  let left = -1;
  let i = 0;
  let j = 0;
  let p = 0;
  const output = [];
  while (p < total) {
    while (p < total && j < right) {
      output.push(matrix[i][j]);
      j += 1;
      p += 1;
    }
    j -= 1;
    i += 1;
    right -= 1;

    while (p < total && i < bottom) {
      output.push(matrix[i][j]);
      i += 1;
      p += 1;
    }
    i -= 1;
    j -= 1;
    bottom -= 1;

    while (p < total && j > left) {
      output.push(matrix[i][j]);
      j -= 1;
      p += 1;
    }
    j += 1;
    i -= 1;
    left += 1;

    while (p < total && i > top) {
      output.push(matrix[i][j]);
      i -= 1;
      p += 1;
    }
    i += 1;
    j += 1;
    top += 1;
  }
  return output;
};
