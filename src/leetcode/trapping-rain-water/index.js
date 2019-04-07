/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  left[0] = height[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  right[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }
  let output = 0;
  for (let i = 0; i < n; i++) {
    output += Math.min(left[i], right[i]) - height[i];
  }
  return output;
};
