/**
 * @param {string} s
 * @return {boolean}
 */

const isRepeated = (s, length) => {
  const repeatTimes = s.length / length;
  for (let r = 1; r < repeatTimes; r++) {
    for (let i = 0; i < length; i++) {
      if (s[r * length + i] !== s[i]) {
        return false;
      }
    }
  }
  return true;
};

var repeatedSubstringPattern = function(s) {
  for (let length = 1; length < s.length; length++) {
    if (s.length % length > 0) {
      continue;
    }
    if (isRepeated(s, length)) {
      return true;
    }
  }
  return false;
};
