/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const top = stack.pop();
      // prettier-ignore
      const isMismatched = top !== '(' && c === ')'
        || top !== '[' && c === ']'
        || top !== '{' && c === '}';
      if (isMismatched) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
