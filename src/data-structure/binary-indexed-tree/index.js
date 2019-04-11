class BinaryIndexedTree {
  constructor(arr) {
    this.m = arr.length;
    this.bit = new Array(this.m + 1).fill(0);
    this.arr = new Array(this.m).fill(0);
    for (let i = 0; i < arr.length; i++) {
      this.update(i, arr[i]);
    }
  }

  getSum(i) {
    let sum = 0;
    for (let j = i + 1; j > 0; j -= lowBit(j)) {
      sum += this.bit[j];
    }
    return sum;
  }

  update(i, val) {
    const delta = val - this.arr[i];
    for (let j = i + 1; j < this.m + 1; j += lowBit(j)) {
      this.bit[j] += delta;
    }
    this.arr[i] = val;
  }
}

function lowBit(i) {
  return i & -i;
}

export default BinaryIndexedTree;
