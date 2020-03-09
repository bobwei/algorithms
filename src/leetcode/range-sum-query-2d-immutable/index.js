/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  this.sums = new Array(m).fill(null).map(() => new Array(n).fill(0));
  this.sums[0][0] = matrix[0][0];
  for (let j = 1; j < n; j++) {
    this.sums[0][j] = this.sums[0][j - 1] + matrix[0][j];
  }
  for (let i = 1; i < m; i++) {
    this.sums[i][0] = this.sums[i - 1][0] + matrix[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // prettier-ignore
      this.sums[i][j] = matrix[i][j]
        + this.sums[i - 1][j] + this.sums[i][j - 1]
        - this.sums[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // prettier-ignore
  return this.sums[row2][col2]
    - (row1 - 1 >= 0 ? this.sums[row1 - 1][col2] : 0)
    - (col1 - 1 >= 0 ? this.sums[row2][col1 - 1] : 0)
    + (row1 - 1 >= 0 && col1 - 1 >= 0 ? this.sums[row1 - 1][col1 - 1] : 0);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
