/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const histogram = matrix[0].map((c) => parseInt(c));
  let max = getLargestRectangleInHistogram(histogram);
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      histogram[j] = matrix[i][j] === '1' ? histogram[j] + 1 : 0;
    }
    max = Math.max(max, getLargestRectangleInHistogram(histogram));
  }
  return max;
};

function getLargestRectangleInHistogram(heights) {
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
}

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
