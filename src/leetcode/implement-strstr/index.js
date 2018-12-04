/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j <= needle.length; j++) {
      if (j >= needle.length) {
        return i;
      }
      if (i + j >= haystack.length) {
        return -1;
      }
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
  }
  return -1;
};
