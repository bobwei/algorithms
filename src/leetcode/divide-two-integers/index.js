/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/*
  30 = 5 * (4 + 2)
  41 = 5 * (8) + 1
*/

const MAX = 2147483648;

const divide = function(dividend, divisor) {
  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let m = dividend;
  let n = divisor;
  let output = 0;
  let i;
  while (m >= divisor) {
    n = divisor;
    i = 1;
    while (n + n <= m) {
      n = n + n;
      i = i + i;
      if (sign < 0 && n > MAX) {
        return sign * MAX;
      } else if (sign > 0 && n >= MAX - 1) {
        return sign * (MAX - 1);
      }
    }
    output += i;
    m -= n;
  }
  return sign * output;
};

export default divide;
