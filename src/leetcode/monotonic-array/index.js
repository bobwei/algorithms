/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function(A) {
  if (!A.length) {
    return false;
  }
  if (A.length <= 2) {
    return true;
  }
  const isIncreasing = A[A.length - 1] >= A[0];
  for (let i = 0; i < A.length - 1; i++) {
    if (isIncreasing && A[i] > A[i + 1]) {
      return false;
    } else if (!isIncreasing && A[i] < A[i + 1]) {
      return false;
    }
  }
  return true;
};

export default isMonotonic;
