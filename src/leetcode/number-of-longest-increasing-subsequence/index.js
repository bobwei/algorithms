/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  https://blog.csdn.net/feifeiiong/article/details/77925635
*/
var findNumberOfLIS = function(nums) {
  const lengths = new Array(nums.length).fill(1);
  const counts = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (lengths[j] + 1 > lengths[i]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[j] + 1 === lengths[i]) {
          counts[i] += counts[j];
        }
      }
    }
    max = Math.max(max, lengths[i]);
  }
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (lengths[i] === max) {
      n += counts[i];
    }
  }
  return n;
};
