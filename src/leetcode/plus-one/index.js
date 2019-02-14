/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1] += 1;
  let curry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const n = digits[i] + curry;
    digits[i] = n % 10;
    curry = Math.floor(n / 10);
  }
  if (curry) {
    digits.splice(0, 0, curry);
  }
  return digits;
};
