/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let c = 0;
  let output = '';
  while (i >= 0 || j >= 0 || c > 0) {
    const sum = parseInt(a[i] || '0') + parseInt(b[j] || '0') + c;
    output = (sum % 2) + output;
    c = Math.floor(sum / 2);
    i -= 1;
    j -= 1;
  }
  return output;
};
