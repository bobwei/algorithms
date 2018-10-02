/**
 * @param {number[]} height
 * @return {number}
 */

/*
  https://www.cnblogs.com/zichi/p/5745992.html
*/

const maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] < height[j]) {
      i += 1;
    } else if (height[i] >= height[j]) {
      j -= 1;
    }
  }
  return max;
};

export default maxArea;
