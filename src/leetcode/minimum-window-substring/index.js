/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s.length || !t.length) {
    return '';
  }
  const counts = {};
  for (let i = 0; i < t.length; i++) {
    counts[t[i]] = (counts[t[i]] || 0) + 1;
  }
  let output = '';
  let left = 0;
  let n = t.length;
  let min = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] !== undefined) {
      counts[s[i]] -= 1;
      if (counts[s[i]] >= 0) {
        n -= 1;
      }
    }
    while (n <= 0) {
      if (i - left + 1 < min) {
        min = i - left + 1;
        output = s.slice(left, left + min);
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
