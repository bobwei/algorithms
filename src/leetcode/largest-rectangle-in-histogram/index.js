/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights.length) {
    return 0;
  }
  const n = heights.length;
  const stack = new Stack();
  let max = -Infinity;
  for (let i = 0; i <= n; i++) {
    while (stack.length && (heights[i] < heights[stack.peek()] || i === n)) {
      const top = stack.pop();
      const left = stack.length ? stack.peek() : -1;
      const width = i - left - 1;
      const height = heights[top];
      const area = width * height;
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  return max;
};

class Stack extends Array {
  peek() {
    return this[this.length - 1];
  }
}
