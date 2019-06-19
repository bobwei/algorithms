/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const sign = numerator * denominator >= 0 ? 1 : -1;
  const result = helper(Math.abs(numerator), Math.abs(denominator));
  return sign > 0 ? result : '-' + result;
};

function helper(numerator, denominator) {
  const int = Math.floor(numerator / denominator);
  if (numerator - int * denominator === 0) {
    return int + '';
  }
  const visited = {};
  let fraction = '';
  let n = (numerator - int * denominator) * 10;
  while (n) {
    if (n in visited) {
      const s = visited[n];
      const nonRepeated = fraction.substring(0, s);
      const repeated = fraction.substring(s);
      return `${int}.${nonRepeated}(${repeated})`;
    }
    const q = Math.floor(n / denominator);
    visited[n] = fraction.length;
    fraction += q;
    n = (n - denominator * q) * 10;
  }
  return `${int}.${fraction}`;
}
