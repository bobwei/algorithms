var ProductOfNumbers = function() {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if (num === 0) {
    this.arr.splice(0, this.arr.length);
    return;
  }
  const val = this.arr.length > 0 ? num * this.arr[this.arr.length - 1] : num;
  this.arr.push(val);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  if (k > this.arr.length) {
    return 0;
  }
  return this.arr.length - k - 1 >= 0
    ? this.arr[this.arr.length - 1] / this.arr[this.arr.length - k - 1]
    : this.arr[this.arr.length - 1];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
