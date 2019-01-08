/**
 * @param {character[][]} matrix
 * @return {number}
 */

const maxInHistogram = (heights) => {
  const n = heights.length;
  const stack = [];
  let max = 0;
  for (let i = 0; i <= n; i++) {
    while (stack.length && (heights[i] < heights[stack[stack.length - 1]] || i === n)) {
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

var maximalRectangle = function(matrix) {
  if (!matrix || !matrix.length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...new Array(m)].map(() => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    dp[0][j] = parseInt(matrix[0][j]);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = parseInt(matrix[i][j]);
      dp[i][j] = val > 0 ? dp[i - 1][j] + val : 0;
    }
  }
  let max = 0;
  for (let i = 0; i < m; i++) {
    max = Math.max(max, maxInHistogram(dp[i]));
  }
  return max;
};
