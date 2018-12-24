/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let n = x;
  let reversedX = 0;
  while (n > 0) {
    reversedX = 10 * reversedX + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversedX === x;
};
