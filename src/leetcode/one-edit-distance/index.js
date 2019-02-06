/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  const n = Math.min(s.length, t.length);
  for (let i = 0; i < n; i++) {
    if (s[i] !== t[i]) {
      if (s.length < t.length) {
        return s.substring(0, i) + t[i] + s.substring(i, s.length) === t;
      } else if (s.length > t.length) {
        return s.substring(0, i) + '' + s.substring(i + 1, s.length) === t;
      } else {
        return s.substring(0, i) + t[i] + s.substring(i + 1, s.length) === t;
      }
    }
  }
  return Math.abs(s.length - t.length) === 1;
};
