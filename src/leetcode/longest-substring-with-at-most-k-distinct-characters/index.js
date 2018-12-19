/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const counts = {};
  let n = 0;
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!counts[s[i]]) {
      n += 1;
    }
    counts[s[i]] = (counts[s[i]] || 0) + 1;
    if (n <= k) {
      max = Math.max(max, i - left + 1);
    }
    while (n > k) {
      counts[s[left]] -= 1;
      if (counts[s[left]] <= 0) {
        n -= 1;
      }
      left += 1;
    }
  }
  return max;
};
