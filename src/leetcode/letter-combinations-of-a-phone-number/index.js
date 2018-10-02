/**
 * @param {string} digits
 * @return {string[]}
 */

const mapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = function(digits, start = 0, selected = [], output = []) {
  if (!digits) {
    return [];
  }
  if (start >= digits.length) {
    output.push(selected.join(''));
    return output;
  }
  const d = digits[start];
  for (let i = 0; i < mapping[d].length; i++) {
    selected.push(mapping[d][i]);
    letterCombinations(digits, start + 1, selected, output);
    selected.pop();
  }
  return output;
};

export default letterCombinations;
