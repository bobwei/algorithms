/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
  if (!s) {
    return true;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    /* isLeftBracket */
    if (['(', '[', '{'].indexOf(char) > -1) {
      stack.push(s[i]);
      /* isRightBracket */
    } else if ([')', ']', '}'].indexOf(char) > -1) {
      const leftBracket = stack.pop();
      if (
        (leftBracket === '(' && char !== ')') ||
        (leftBracket === '[' && char !== ']') ||
        (leftBracket === '{' && char !== '}')
      ) {
        return false;
      }
      if (!leftBracket) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

export default isValid;
