/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const isLeft = s[i] === '(' || s[i] === '[' || s[i] === '{';
    if (isLeft) {
      stack.push(s[i]);
    } else {
      const left = stack.pop();
      const right = s[i];
      const isValidPair =
        (left === '(' && right === ')') ||
        (left === '[' && right === ']') ||
        (left === '{' && right === '}');
      if (!isValidPair) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
