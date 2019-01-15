/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

var letterCombinations = function(digits, i = 0, selected = '', output = []) {
  if (i >= digits.length) {
    if (selected.length) {
      output.push(selected);
    }
    return output;
  }
  for (let j = 0; j < map[digits[i]].length; j++) {
    letterCombinations(digits, i + 1, selected + map[digits[i]][j], output);
  }
  return output;
};
