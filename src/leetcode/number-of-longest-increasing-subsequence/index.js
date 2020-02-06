/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const m = nums.length;
  const dp = new Array(m).fill(null).map(() => ({ length: 1, count: 1 }));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j].length + 1 > dp[i].length) {
          dp[i].length = dp[j].length + 1;
          dp[i].count = dp[j].count;
        } else if (dp[j].length + 1 === dp[i].length) {
          dp[i].count += dp[j].count;
        }
      }
    }
  }
  const max = Math.max(...dp.map(({ length }) => length));
  return dp
    .filter(({ length }) => length === max)
    .map(({ count }) => count)
    .reduce((acc, cur) => acc + cur, 0);
};
