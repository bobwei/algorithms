/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (arr, start, end) => {
  let i = start;
  let j = end;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

/* babad */

var longestPalindrome = function(s) {
  let max = { length: -Infinity, index: null };
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome(s, j, i)) {
        const length = i - j + 1;
        if (length >= max.length) {
          max = { length, index: i };
        }
      }
    }
  }
  return s.slice(max.index + 1 - max.length, max.index + 1);
};
