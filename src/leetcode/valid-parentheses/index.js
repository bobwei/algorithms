/**
 * @param {string} s
 * @return {boolean}
 */

const symbols = {
  left: ['(', '[', '{'],
  right: [')', ']', '}'],
};

var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (symbols.left.indexOf(c) > -1) {
      stack.push(c);
    } else {
      const pre = stack.pop();
      if (c === symbols.right[0] && pre !== symbols.left[0]) {
        return false;
      } else if (c === symbols.right[1] && pre !== symbols.left[1]) {
        return false;
      } else if (c === symbols.right[2] && pre !== symbols.left[2]) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
