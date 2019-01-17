/**
 * @param {string} s
 * @return {number}
 */

/*
  '1+2+3-4-5'
  '(1 + 2 + 3 + ( 4 + 5 ))'
*/

const createParentheses = (s) => {
  const map = {};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      map[stack.pop()] = i;
    }
  }
  return map;
};

const isNumber = (c) => /[0-9]/.test(c);

const parseNumberSubstring = (s, start) => {
  let i = start;
  while (isNumber(s[i])) {
    i += 1;
  }
  return s.slice(start, i);
};

var calculate = function(s, parentheses = createParentheses(s), start = 0, end = s.length - 1) {
  let output = 0;
  let num = 1;
  for (let i = start; i <= end; i++) {
    if (isNumber(s[i])) {
      const str = parseNumberSubstring(s, i);
      output += num * parseInt(str);
      i += str.length - 1;
    } else if (s[i] === '+') {
      num = 1;
    } else if (s[i] === '-') {
      num = -1;
    } else if (s[i] === '(') {
      output += num * calculate(s, parentheses, i + 1, parentheses[i] - 1);
      i = parentheses[i];
    }
  }
  return output;
};
