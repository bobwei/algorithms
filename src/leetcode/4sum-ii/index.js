/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const sums1 = createCombinationSums(A, B);
  const sums2 = createCombinationSums(C, D);
  let count = 0;
  for (const sum in sums1) {
    if (0 - sum in sums2) {
      count += sums1[sum] * sums2[0 - sum];
    }
  }
  return count;
};

function createCombinationSums(arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const sum = arr1[i] + arr2[j];
      map[sum] = (map[sum] || 0) + 1;
    }
  }
  return map;
}
