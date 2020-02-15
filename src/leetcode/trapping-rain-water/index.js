/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const m = height.length;
  const left = new Array(m).fill(0);
  left[0] = height[0];
  for (let i = 1; i < m; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  let sum = 0;
  let right = height[m - 1];
  for (let i = m - 2; i >= 0; i--) {
    right = Math.max(right, height[i]);
    sum += Math.min(left[i], right) - height[i];
  }
  return sum;
};
