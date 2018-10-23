/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length <= 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs.pop();
  }
  let l = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].slice(0, l) !== strs[0].slice(0, l)) {
      l -= 1;
      if (l <= 0) {
        return '';
      }
    }
  }
  return strs[0].slice(0, l);
};
