/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] < height[j]) {
      i += 1;
    } else if (height[j] < height[i]) {
      j -= 1;
    } else {
      i += 1;
      j -= 1;
    }
  }
  return max;
};
