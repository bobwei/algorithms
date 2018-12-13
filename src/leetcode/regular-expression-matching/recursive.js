/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p, i = 0, j = 0) {
  if (j >= p.length) {
    return i >= s.length;
  }
  if (p[j + 1] === '*') {
    return (
      isMatch(s, p, i, j + 2) ||
      (i < s.length && (p[j] === s[i] || p[j] === '.') && isMatch(s, p, i + 1, j))
    );
  }
  return i < s.length && (p[j] === s[i] || p[j] === '.') && isMatch(s, p, i + 1, j + 1);
};
