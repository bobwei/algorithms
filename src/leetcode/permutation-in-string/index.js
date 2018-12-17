/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
  const counts = {};
  for (let i = 0; i < s1.length; i++) {
    counts[s1[i]] = (counts[s1[i]] || 0) + 1;
  }
  let n = s1.length;
  let left = 0;
  for (let i = 0; i < s2.length; i++) {
    if (counts[s2[i]] !== undefined) {
      counts[s2[i]] -= 1;
      if (counts[s2[i]] >= 0) {
        n -= 1;
      }
    }
    if (n === 0) {
      return true;
    }
    while ((counts[s2[i]] === undefined && left <= i) || counts[s2[i]] < 0) {
      if (counts[s2[left]] !== undefined) {
        counts[s2[left]] += 1;
        if (counts[s2[left]] > 0) {
          n += 1;
        }
      }
      left += 1;
    }
  }
  return false;
};
