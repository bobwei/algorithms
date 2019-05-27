/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = new Stack();
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.peek] > heights[i]) {
      const area = getArea(heights, stack, i);
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  while (stack.length) {
    const area = getArea(heights, stack, heights.length);
    max = Math.max(max, area);
  }
  return max;
};

function getArea(heights, stack, i) {
  const j = stack.pop();
  const width = stack.length ? i - stack.peek - 1 : i;
  const height = heights[j];
  return width * height;
}

class Stack extends Array {
  get peek() {
    return this[this.length - 1];
  }
}
