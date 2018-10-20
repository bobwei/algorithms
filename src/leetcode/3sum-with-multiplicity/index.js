/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  const cache = {};
  let n = 0;
  for (let i = 0; i < A.length; i++) {
    n += cache[target - A[i]] || 0;
    for (let j = 0; j < i; j++) {
      const sum = A[i] + A[j];
      cache[sum] = (cache[sum] || 0) + 1;
    }
  }
  return n % (10 ** 9 + 7);
};
