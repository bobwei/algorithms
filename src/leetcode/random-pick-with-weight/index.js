/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.arr = new Array(w.length).fill(null);
  this.arr[0] = w[0];
  for (let i = 1; i < this.arr.length; i++) {
    this.arr[i] = this.arr[i - 1] + w[i];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const r = createRandomInt(1, this.arr[this.arr.length - 1]);
  return lowerBound(this.arr, r);
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const m = Math.floor((left + right) / 2);
    if (target <= arr[m]) {
      right = m;
    } else {
      left = m + 1;
    }
  }
  return left;
}

function createRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
