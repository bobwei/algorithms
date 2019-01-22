/**
 * @param {number[]} nums
 * @return {boolean}
 */

var splitArray = function(nums) {
  const sums = new Array(nums.length).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }

  for (let j = 3; j < nums.length - 3; j++) {
    const eqSums = new Set();
    let start;
    let end;

    start = 1;
    end = j - 2;
    for (let i = start; i <= end; i++) {
      const left = sums[i - 1] - (sums[start - 2] || 0);
      const right = sums[end + 1] - sums[i];
      if (left === right) {
        eqSums.add(left);
      }
    }
    if (!eqSums.size) continue;

    start = j + 2;
    end = nums.length - 2;
    for (let i = start; i <= end; i++) {
      const left = sums[i - 1] - (sums[start - 2] || 0);
      const right = sums[end + 1] - sums[i];
      if (left === right && eqSums.has(left)) {
        return true;
      }
    }
  }
  return false;
};
