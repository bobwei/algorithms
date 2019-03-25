class BinaryIndexedTree {
  constructor(arr) {
    this.bit = new Array(arr.length - 1).fill(0);
    arr.forEach((val, i) => {
      this.update(i, val);
    });
  }

  getSum(index) {
    let i = index + 1;
    let sum = 0;
    while (i > 0) {
      sum += this.bit[i];
      i -= i & -i;
    }
    return sum;
  }

  update(index, delta) {
    let i = index + 1;
    while (i < this.bit.length) {
      this.bit[i] += delta;
      i = i + (i & -i);
    }
  }
}

export default BinaryIndexedTree;
