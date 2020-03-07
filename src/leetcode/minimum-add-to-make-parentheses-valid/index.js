/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = 0;
  let nSteps = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack += 1;
    } else if (S[i] === ')') {
      if (!stack) {
        nSteps += 1;
      } else {
        stack -= 1;
      }
    }
  }
  return nSteps + stack;
};
