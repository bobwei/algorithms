/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let cache = {};
  let length = 0;
  let j = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!cache[c]) {
      cache[c] = true;
      length += 1;
      max = Math.max(max, length);
    } else {
      while (s[j] !== s[i]) {
        delete cache[s[j]];
        length -= 1;
        j += 1;
      }
      j += 1;
    }
  }
  return max;
};

export default lengthOfLongestSubstring;
