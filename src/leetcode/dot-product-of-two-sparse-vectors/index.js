/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.map[i] = nums[i];
    }
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
  const map = Object.keys(this.map).length <= Object.keys(vec).length ? this.map : vec.map;
  let sum = 0;
  for (const key in map) {
    if (key in this.map && key in vec.map) {
      sum += this.map[key] * vec.map[key];
    }
  }
  return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
