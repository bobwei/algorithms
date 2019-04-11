/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  this.m = matrix.length;
  this.n = matrix[0].length;
  this.bit = [...new Array(this.m + 1)].map(() => new Array(this.n + 1).fill(0));
  this.matrix = [...new Array(this.m)].map(() => new Array(this.n).fill(0));
  for (let i = 0; i < this.m; i++) {
    for (let j = 0; j < this.n; j++) {
      this.update(i, j, matrix[i][j]);
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  if (!this.m || !this.n) {
    return;
  }
  const delta = val - this.matrix[row][col];
  for (let i = row + 1; i < this.m + 1; i += lowBit(i)) {
    for (let j = col + 1; j < this.n + 1; j += lowBit(j)) {
      this.bit[i][j] += delta;
    }
  }
  this.matrix[row][col] = val;
};

NumMatrix.prototype.getSum = function(row, col) {
  let sum = 0;
  for (let i = row + 1; i > 0; i -= lowBit(i)) {
    for (let j = col + 1; j > 0; j -= lowBit(j)) {
      sum += this.bit[i][j];
    }
  }
  return sum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (!this.m || !this.n) {
    return 0;
  }
  // prettier-ignore
  return this.getSum(row2, col2) + this.getSum(row1 - 1, col1 - 1)
    - this.getSum(row1 - 1, col2) - this.getSum(row2, col1 - 1);
};

function lowBit(i) {
  return i & -i;
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
