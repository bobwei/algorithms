/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const left = stack.pop();
      // prettier-ignore
      const valid =
        left ==='(' && c === ')' ||
        left ==='[' && c === ']' ||
        left ==='{' && c === '}';
      if (!valid) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
