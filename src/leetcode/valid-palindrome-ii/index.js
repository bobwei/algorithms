/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s, start = 0, end = s.length - 1, nDeletes = 1) {
  let left = start;
  let right = end;
  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      if (nDeletes > 0) {
        return validPalindrome(s, left + 1, right, 0) || validPalindrome(s, left, right - 1, 0);
      }
      return false;
    }
  }
  return true;
};
