/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  this.m = matrix.length;
  this.n = matrix[0].length;
  this.sum = [...new Array(this.m)].map(() => new Array(this.n).fill(0));
  for (let j = 0; j < this.n; j++) {
    this.sum[0][j] = (j - 1 >= 0 ? this.sum[0][j - 1] : 0) + matrix[0][j];
  }
  for (let i = 0; i < this.m; i++) {
    this.sum[i][0] = (i - 1 >= 0 ? this.sum[i - 1][0] : 0) + matrix[i][0];
  }
  for (let i = 1; i < this.m; i++) {
    for (let j = 1; j < this.n; j++) {
      // prettier-ignore
      this.sum[i][j] = this.sum[i - 1][j]
        + this.sum[i][j - 1]
        - this.sum[i - 1][j - 1]
        + matrix[i][j];
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
  if (!this.sum) {
    return 0;
  }
  // prettier-ignore
  return this.sum[row2][col2]
    - (row1 - 1 >= 0 ? this.sum[row1 - 1][col2] : 0)
    - (col1 - 1 >= 0 ? this.sum[row2][col1 - 1] : 0)
    + (row1 - 1 >= 0 && col1 - 1 >= 0 ? this.sum[row1 - 1][col1 - 1] : 0);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
