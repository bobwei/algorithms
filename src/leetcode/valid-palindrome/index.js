/**
 * @param {string} s
 * @return {boolean}
 */

const isAlphanumeric = (s) => {
  return /[A-Za-z0-9]/.test(s);
};

var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (!isAlphanumeric(s[i])) {
      i += 1;
    }
    while (!isAlphanumeric(s[j])) {
      j -= 1;
    }
    if (i >= j) {
      break;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};
