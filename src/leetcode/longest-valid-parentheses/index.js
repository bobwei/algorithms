/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length && s[stack[stack.length - 1]] === '(') {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  stack.push(s.length);
  let output = 0;
  for (let i = 0; i < stack.length - 1; i++) {
    output = Math.max(output, stack[i + 1] - stack[i] - 1);
  }
  return output;
};
