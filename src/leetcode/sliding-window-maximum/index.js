/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const output = [];
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i - k + 1 >= 0) {
      output.push(nums[deque[0]]);
    }
  }
  return output;
};
