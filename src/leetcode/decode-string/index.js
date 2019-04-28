/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s, start = 0, end = s.length - 1, positions = findBrackets(s)) {
  let output = '';
  let i = start;
  while (i <= end) {
    if (isNumber(s[i])) {
      let num = 0;
      while (isNumber(s[i])) {
        num = 10 * num + parseInt(s[i]);
        i += 1;
      }
      output += decodeString(s, i + 1, positions[i] - 1, positions).repeat(num);
      i = positions[i] + 1;
    } else {
      output += s[i];
      i += 1;
    }
  }
  return output;
};

function findBrackets(s) {
  const map = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push(i);
    } else if (s[i] === ']') {
      map[stack.pop()] = i;
    }
  }
  return map;
}

function isNumber(c) {
  return /[0-9]/.test(c);
}
