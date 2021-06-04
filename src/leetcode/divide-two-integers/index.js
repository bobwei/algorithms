/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  const r = helper(Math.abs(dividend), Math.abs(divisor));
  return sign > 0 ? Math.min(r, MAX - 1) : Math.max(-r, -MAX);
};

function helper(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }
  let i = 1;
  let n = divisor;
  while (n + n < dividend) {
    i += i;
    n += n;
  }
  return i + helper(dividend - n, divisor);
}

const MAX = 2 ** 31;
