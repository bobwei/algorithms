/**
 * @param {character[][]} matrix
 * @return {number}
 */

const getMaxWithHeights = (heights) => {
  const n = heights.length;
  const stack = [];
  let max = 0;
  for (let i = 0; i <= n; i++) {
    while (stack.length && (heights[i] < heights[stack[stack.length - 1]] || i === n)) {
      const j = stack.pop();
      const left = stack.length ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      const height = heights[j];
      const area = width * height;
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  return max;
};

var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const heights = [...matrix[0].map((c) => parseInt(c))];
  let max = getMaxWithHeights(heights);
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      heights[j] = matrix[i][j] === '0' ? 0 : heights[j] + 1;
    }
    max = Math.max(max, getMaxWithHeights(heights));
  }
  return max;
};
