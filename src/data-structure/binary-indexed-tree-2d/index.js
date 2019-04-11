class BinaryIndexedTree {
  constructor(matrix) {
    this.m = matrix.length;
    this.n = matrix[0].length;
    this.bit = [...new Array(this.m + 1)].map(() => new Array(this.n + 1).fill(0));
    this.matrix = [...new Array(this.m)].map(() => new Array(this.n).fill(0));
    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        this.update(i, j, matrix[i][j]);
        this.matrix[i][j] = matrix[i][j];
      }
    }
  }

  getSum(row, col) {
    let sum = 0;
    for (let i = row + 1; i > 0; i -= lowBit(i)) {
      for (let j = col + 1; j > 0; j -= lowBit(j)) {
        sum += this.bit[i][j];
      }
    }
    return sum;
  }

  update(row, col, value) {
    const delta = value - this.matrix[row][col];
    for (let i = row + 1; i < this.m + 1; i += lowBit(i)) {
      for (let j = col + 1; j < this.n + 1; j += lowBit(j)) {
        this.bit[i][j] += delta;
      }
    }
  }
}

function lowBit(i) {
  return i & -i;
}

export default BinaryIndexedTree;
