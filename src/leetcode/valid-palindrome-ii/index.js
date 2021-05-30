/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, start = 0, end = s.length - 1, nDeletes = 1) {
  let i = start;
  let j = end;
  while (i < j) {
    if (s[i] !== s[j]) {
      return (
        nDeletes > 0 &&
        (validPalindrome(s, i + 1, j, nDeletes - 1) || validPalindrome(s, i, j - 1, nDeletes - 1))
      );
    }
    i += 1;
    j -= 1;
  }
  return true;
};
