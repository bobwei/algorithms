/**
 * @param {string} s
 * @return {number}
 */
/*
  pwxyzwkew
*/
var lengthOfLongestSubstring = function(s) {
  const cache = {};
  let length = 0;
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (!cache[s[i]]) {
      cache[s[i]] = true;
      length += 1;
      max = Math.max(max, length);
      continue;
    }
    while (s[left] !== s[i]) {
      delete cache[s[left]];
      left += 1;
      length -= 1;
    }
    left += 1;
  }
  return max;
};
