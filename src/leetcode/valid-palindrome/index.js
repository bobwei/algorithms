/**
 * @param {string} s
 * @return {boolean}
 */

const shouldContinue = (c) => {
  return !/[0-9a-zA-Z]/.test(c);
};

var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (shouldContinue(s[i])) {
      i += 1;
    }
    while (shouldContinue(s[j])) {
      j -= 1;
    }
    if (s[i] && s[j] && s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};
