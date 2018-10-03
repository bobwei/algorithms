/**
 * @param {string} s
 * @return {boolean}
 */

/* ebbem */

const isValidPalindrome = (s, start, end) => {
  let i = start;
  let j = end;
  while (i < j) {
    if (s[i] === s[j]) {
      i += 1;
      j -= 1;
    } else {
      return false;
    }
  }
  return true;
};

var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i += 1;
      j -= 1;
    } else {
      return isValidPalindrome(s, i, j - 1) || isValidPalindrome(s, i + 1, j);
    }
  }
  return true;
};
