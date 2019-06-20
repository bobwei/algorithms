/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!(c in map)) map[c] = [];
    map[c].push(i);
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map[c].length === 1) {
      return map[c].pop();
    }
  }
  return -1;
};
