/**
 * @param {number[]} heights
 * @return {number}
 */

/*
  A largest rectangle is surround by two shorter side at left and right.
  So for each height, our goal is to find left and right border which is the first height shorter than the target.
*/

var largestRectangleArea = function(heights) {
  const stack = [];
  let max = 0;
  for (let i = 0; i <= heights.length; i++) {
    const h = heights[i];
    while (stack.length && (heights[stack[stack.length - 1]] > h || i === heights.length)) {
      const height = heights[stack.pop()];
      const left = stack.length ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      const area = width * height;
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  return max;
};
