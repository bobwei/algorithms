/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) {
    return [[1]];
  }
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  let [top, right, bottom, left] = [0, n - 1, n - 1, 0];
  let num = 1;
  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      matrix[top][j] = num;
      num += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;
    for (let j = right; j >= left; j--) {
      matrix[bottom][j] = num;
      num += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num += 1;
    }
    left += 1;
  }
  return matrix;
};
