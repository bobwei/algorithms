/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  this.sum = [...new Array(m)].map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += matrix[i][j];
      this.sum[i][j] = rowSum;
      if (i - 1 >= 0) {
        this.sum[i][j] += this.sum[i - 1][j];
      }
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
  let output = this.sum[row2][col2];
  if (row1 - 1 >= 0) {
    output -= this.sum[row1 - 1][col2];
  }
  if (col1 - 1 >= 0) {
    output -= this.sum[row2][col1 - 1];
  }
  if (row1 - 1 >= 0 && col1 - 1 >= 0) {
    output += this.sum[row1 - 1][col1 - 1];
  }
  return output;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
