/**
 * @param {number} k
 * @param {number[]} nums
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleUp = (arr, i) => {
  if (!i) {
    return;
  }
  const p = Math.floor((i - 1) / 2);
  if (arr[p] > arr[i]) {
    swap(arr, p, i);
    bubbleUp(arr, p);
  }
};

const bubbleDown = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValidHeap =
    (left >= arr.length || arr[i] <= arr[left]) &&
    (right >= arr.length || arr[i] <= arr[right]);
  if (isValidHeap) {
    return;
  }
  const next = arr[left] < arr[right] || right >= arr.length ? left : right;
  swap(arr, i, next);
  bubbleDown(arr, next);
};

const extractTop = (arr) => {
  if (arr.length <= 1) {
    return arr.pop();
  }
  arr[0] = arr.pop();
  bubbleDown(arr, 0);
};

const KthLargest = function(k, nums) {
  this.arr = new Array(k).fill(-Infinity);
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!this.arr.length || val > this.arr[0]) {
      this.arr.push(val);
      bubbleUp(this.arr, this.arr.length - 1);
      if (this.arr.length > this.k) {
        extractTop(this.arr);
      }
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (val > this.arr[0]) {
    this.arr.push(val);
    bubbleUp(this.arr, this.arr.length - 1);
    if (this.arr.length > this.k) {
      extractTop(this.arr);
    }
  }
  return this.arr[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

export default KthLargest;
