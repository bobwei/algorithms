/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let min = Infinity;
    for (let l = 1; l <= A.length - i; l++) {
      min = Math.min(min, A[i + l - 1]);
      sum += min;
    }
  }
  return sum % (10 ** 9 + 7);
};
