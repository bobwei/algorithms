/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
  const counts = {};
  for (let i = 0; i < p.length; i++) {
    counts[p[i]] = (counts[p[i]] || 0) + 1;
  }
  const output = [];
  let n = p.length;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] !== undefined) {
      counts[s[i]] -= 1;
      if (counts[s[i]] >= 0) {
        n -= 1;
      }
    }
    while (n <= 0) {
      if (i - left + 1 === p.length) {
        output.push(left);
      }
      if (counts[s[left]] !== undefined) {
        counts[s[left]] += 1;
        if (counts[s[left]] > 0) {
          n += 1;
        }
      }
      left += 1;
    }
  }
  return output;
};
