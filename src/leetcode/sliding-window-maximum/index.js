/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const output = [];
  const deque = new Deque();
  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    while (deque.length && nums[i] > nums[deque.rear()]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      output.push(nums[deque[0]]);
    }
  }
  return output;
};

class Deque extends Array {
  rear() {
    return this[this.length - 1];
  }
}
