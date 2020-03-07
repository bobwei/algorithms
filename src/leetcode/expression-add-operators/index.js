/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target, index = 0, sum = 0, delta = 0, str = '', output = []) {
  if (index >= num.length) {
    if (sum === target) {
      output.push(str);
    }
    return output;
  }
  for (let length = 1; index + length <= num.length; length++) {
    const substr = num.substring(index, index + length);
    if (substr[0] === '0' && substr.length > 1) {
      continue;
    }
    const n = parseInt(substr);
    if (!str) {
      addOperators(num, target, index + length, sum + n, n, str + substr, output);
    }
    if (str) {
      addOperators(num, target, index + length, sum + n, +n, str + '+' + substr, output);
      addOperators(num, target, index + length, sum - n, -n, str + '-' + substr, output);
      // prettier-ignore
      addOperators(num, target, index + length, sum - delta + delta * n, delta * n, str + '*' + substr, output);
    }
  }
  return output;
};
