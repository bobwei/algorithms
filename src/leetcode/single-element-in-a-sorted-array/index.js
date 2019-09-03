/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let m = Math.floor((left + right) / 2);
    if (nums[m] === nums[m - 1]) m -= 1;
    if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
      return nums[m];
    } else if ((m - left) % 2 === 1) {
      right = m;
    } else {
      left = m + 2;
    }
  }
};
