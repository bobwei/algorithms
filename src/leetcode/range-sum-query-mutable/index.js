/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  if (!nums.length) {
    return;
  }
  this.m = nums.length;
  this.bit = new Array(this.m + 1).fill(0);
  this.arr = new Array(this.m).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.update(i, nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  const delta = val - this.arr[i];
  for (let j = i + 1; j < this.m + 1; j += lowBit(j)) {
    this.bit[j] += delta;
  }
  this.arr[i] = val;
};

NumArray.prototype.getSum = function(i) {
  let sum = 0;
  for (let j = i + 1; j > 0; j -= lowBit(j)) {
    sum += this.bit[j];
  }
  return sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (!this.arr) {
    return 0;
  }
  return this.getSum(j) - this.getSum(i - 1);
};

function lowBit(i) {
  return i & -i;
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
