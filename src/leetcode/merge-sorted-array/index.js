/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let i = m + n - 1;
  let j = m - 1;
  let k = n - 1;
  while (i >= 0) {
    if (nums1[j] >= nums2[k] || k < 0) {
      nums1[i] = nums1[j];
      i -= 1;
      j -= 1;
    } else if (nums1[j] < nums2[k] || j < 0) {
      nums1[i] = nums2[k];
      i -= 1;
      k -= 1;
    }
  }
};

export default merge;
