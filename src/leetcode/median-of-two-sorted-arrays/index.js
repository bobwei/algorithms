/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findKth = (arr1, arr2, k) => {
  if (arr1.length > arr2.length) {
    return findKth(arr2, arr1, k);
  }
  let left = 0;
  let right = arr1.length - 1;
  while (right >= left - 1) {
    const p1 = Math.floor((left + right) / 2);
    const p2 = k - p1 - 2;
    const maxLeft = Math.max(arr1[p1] || -Infinity, arr2[p2] || -Infinity);
    const minRight = Math.min(arr1[p1 + 1] || Infinity, arr2[p2 + 1] || Infinity);
    if (maxLeft <= minRight) {
      return maxLeft;
    } else if (arr1[p1] > arr2[p2 + 1]) {
      right = p1 - 1;
    } else if (arr2[p2] > arr1[p1 + 1]) {
      left = p1 + 1;
    }
  }
};

var findMedianSortedArrays = function(nums1, nums2) {
  const n = nums1.length + nums2.length;
  const k = Math.ceil(n / 2);
  return n % 2 === 0
    ? (findKth(nums1, nums2, k) + findKth(nums1, nums2, k + 1)) / 2
    : findKth(nums1, nums2, k);
};
