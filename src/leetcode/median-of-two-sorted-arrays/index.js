/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const n = nums1.length + nums2.length;
  const k = Math.ceil(n / 2);
  if (n % 2 === 1) {
    return findKth(nums1, nums2, k);
  }
  return (findKth(nums1, nums2, k) + findKth(nums1, nums2, k + 1)) / 2;
};

function findKth(arr1, arr2, k) {
  if (arr1.length > arr2.length) {
    return findKth(arr2, arr1, k);
  }
  let left = 0;
  let right = arr1.length;
  while (left < right) {
    const m = Math.floor((left + right) / 2);
    const n = k - m - 2;
    const max1 = m in arr1 ? arr1[m] : -Infinity;
    const max2 = n in arr2 ? arr2[n] : -Infinity;
    const min1 = m + 1 in arr1 ? arr1[m + 1] : Infinity;
    const min2 = n + 1 in arr2 ? arr2[n + 1] : Infinity;
    if (Math.max(max1, max2) <= Math.min(min1, min2)) {
      return Math.max(max1, max2);
    } else if (arr1[m + 1] < arr2[n]) {
      left = m + 1;
    } else {
      right = m;
    }
  }
  return arr2[k - 1];
}
