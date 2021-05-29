/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const arr = new Array(height.length).fill(null);
  arr[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    arr[i] = Math.max(arr[i - 1], height[i]);
  }
  let output = 0;
  let max = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    max = Math.max(max, height[i]);
    output += Math.min(arr[i], max) - height[i];
  }
  return output;
};
