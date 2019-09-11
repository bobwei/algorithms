/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator % denominator === 0) {
    return numerator / denominator + '';
  }
  const sign = numerator * denominator < 0 ? -1 : 1;
  const result = helper(Math.abs(numerator), Math.abs(denominator));
  if (sign < 0) {
    return '-' + result;
  }
  return result;
};

function helper(numerator, denominator) {
  let output = Math.floor(numerator / denominator) + '.';
  let num = (numerator % denominator) * 10;
  const visited = {};
  while (num > 0) {
    if (num in visited) {
      const i = visited[num];
      return output.substring(0, i) + '(' + output.substring(i) + ')';
    }
    visited[num] = output.length;
    output += Math.floor(num / denominator);
    num = (num % denominator) * 10;
  }
  return output;
}
