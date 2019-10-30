class Spreadsheet {
  constructor({ size = 10, height = 5 } = {}) {
    this.arr = new Array(size).fill(0);
    this.bit = new Array(size + 1).fill(0);
    for (let i = 0; i < size; i++) {
      this.update(i, height);
    }
  }

  update(row, newHeight) {
    const delta = newHeight - this.arr[row];
    for (let i = row + 1; i <= this.bit.length; i += getLastBit(i)) {
      this.bit[i] += delta;
    }
    this.arr[row] = newHeight;
  }

  getHeight(row) {
    let sum = 0;
    for (let i = row + 1; i > 0; i -= getLastBit(i)) {
      sum += this.bit[i];
    }
    return sum;
  }

  getRow(y) {
    let left = 0;
    let right = this.arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (y >= this.getHeight(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

function getLastBit(i) {
  return i & -i;
}

export default Spreadsheet;
