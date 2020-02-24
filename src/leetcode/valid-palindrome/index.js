/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const m = s.length;
  let i = 0;
  let j = m - 1;
  while (i < j) {
    while (!isAlphanumeric(s[i]) && i < m) {
      i += 1;
    }
    while (!isAlphanumeric(s[j]) && j >= 0) {
      j -= 1;
    }
    if (i < m && j >= 0 && s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

function isAlphanumeric(c) {
  return /[a-zA-Z0-9]+/.test(c);
}
