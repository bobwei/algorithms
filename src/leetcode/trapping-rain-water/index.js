/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let i = 0;
  let j = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let output = 0;
  while (i < j) {
    if (height[i] <= height[j]) {
      if (leftMax > height[i]) {
        output += leftMax - height[i];
      } else {
        leftMax = height[i];
      }
      i += 1;
    } else if (height[j] < height[i]) {
      if (rightMax > height[j]) {
        output += rightMax - height[j];
      } else {
        rightMax = height[j];
      }
      j -= 1;
    }
  }
  return output;
};
