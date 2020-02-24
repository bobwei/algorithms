/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let c = 0;
  let output = '';
  while (i >= 0 || j >= 0 || c > 0) {
    const sum = parseInt(num1[i] || '0') + parseInt(num2[j] || '0') + c;
    output = (sum % 10) + output;
    c = Math.floor(sum / 10);
    i -= 1;
    j -= 1;
  }
  return output;
};
