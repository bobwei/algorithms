/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const m = nums.length;
  const arr = [];
  for (let i = 0; i < m; i++) {
    if (nums[i] % 2 === 1) {
      arr.push(i);
    }
  }
  let count = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    const j = i + k - 1;
    const nLefts = i - 1 >= 0 ? arr[i] - arr[i - 1] - 1 : arr[i];
    const nRights = j + 1 < arr.length ? arr[j + 1] - arr[j] - 1 : m - arr[j] - 1;
    count += (nLefts + 1) * (nRights + 1);
  }
  return count;
};
