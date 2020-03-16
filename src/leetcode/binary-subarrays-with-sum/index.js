/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  const freq = { 0: 1 };
  let sum = 0;
  let nSubarrs = 0;
  for (const num of A) {
    sum += num;
    nSubarrs += freq[sum - S] || 0;
    freq[sum] = (freq[sum] || 0) + 1;
  }
  return nSubarrs;
};
