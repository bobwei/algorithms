/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s, start = 0, end = s.length, brackets = findBrackets(s)) {
  let output = '';
  for (let i = start; i < end; i++) {
    if (isNum(s[i])) {
      const numStr = getNumStr(s, i);
      const num = parseInt(numStr);
      const str = decodeString(s, i + numStr.length + 1, brackets[i + numStr.length], brackets);
      output += str.repeat(num);
      i = brackets[i + numStr.length];
    } else {
      output += s[i];
    }
  }
  return output;
};

function findBrackets(s) {
  const brackets = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push(i);
    } else if (s[i] === ']') {
      brackets[stack.pop()] = i;
    }
  }
  return brackets;
}

function isNum(c) {
  return /[0-9]+/.test(c);
}

function getNumStr(s, start) {
  let i = start;
  while (isNum(s[i])) {
    i += 1;
  }
  return s.substring(start, i);
}
