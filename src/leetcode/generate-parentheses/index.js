/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = function(n, nLeft = n, nRight = n, selected = [], output = []) {
  if (nLeft > nRight || nLeft < 0 || nRight < 0) {
    return output;
  }
  if (selected.length >= n * 2) {
    output.push(selected.join(''));
    return output;
  }
  for (let i = 0; i < 2; i++) {
    if (i % 2 === 0) {
      selected.push('(');
      generateParenthesis(n, nLeft - 1, nRight, selected, output);
      selected.pop();
    } else if (i % 2 === 1) {
      selected.push(')');
      generateParenthesis(n, nLeft, nRight - 1, selected, output);
      selected.pop();
    }
  }
  return output;
};

export default generateParenthesis;
