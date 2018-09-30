/**
 * @param {string} s
 * @return {number}
 */

/*
  Use a sliding window to keep referring to non-repeating chars
  abcwefwkew
*/

const lengthOfLongestSubstring = function(s) {
  const cache = { data: {}, size: 0 };
  let i = 0;
  let max = 0;
  for (let j = 0; j < s.length; j++) {
    if (!cache.data[s[j]]) {
      cache.data[s[j]] = true;
      cache.size += 1;
    } else {
      while (s[i] !== s[j]) {
        delete cache.data[s[i]];
        cache.size -= 1;
        i += 1;
      }
      i += 1;
    }
    max = Math.max(max, cache.size);
  }
  return max;
};

export default lengthOfLongestSubstring;
