/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const sampler = new Sampler();
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      sampler.sample(i);
    }
  }
  return sampler.arr[0];
};

class Sampler {
  constructor(k = 1) {
    this.arr = [];
    this.i = 0;
    this.k = k;
  }

  sample(element) {
    if (this.i < this.k) {
      this.arr.push(element);
    } else {
      const r = Math.floor(Math.random() * (this.i + 1));
      if (r < this.k) {
        this.arr[r] = element;
      }
    }
    this.i += 1;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
