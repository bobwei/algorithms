/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */

var addOperators = function(num, target, i = 0, value = 0, pre = 0, str = '', output = []) {
  if (i >= num.length) {
    if (value === target) {
      output.push(str);
    }
    return output;
  }
  for (let j = i + 1; j <= num.length; j++) {
    const n = parseInt(num.substring(i, j));
    if (j - i > 1 && num[i] === '0') {
      continue;
    }
    if (i === 0) {
      addOperators(num, target, j, value + n, n, str + n, output);
    } else {
      addOperators(num, target, j, value + n, n, str + '+' + n, output);
      addOperators(num, target, j, value - n, -n, str + '-' + n, output);
      addOperators(num, target, j, value - pre + pre * n, pre * n, str + '*' + n, output);
    }
  }
  return output;
};
