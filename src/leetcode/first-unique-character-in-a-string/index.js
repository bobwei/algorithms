/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const cache = {};
  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }
  for (const key in cache) {
    if (cache[key] <= 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
