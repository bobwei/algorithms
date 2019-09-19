/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  // prettier-ignore
  const min = Math.min(
    count(A[0], A, B),
    count(B[0], A, B),
    count(A[0], B, A),
    count(B[0], B, A),
  );
  return min < Infinity ? min : -1;
};

function count(target, A, B) {
  let n = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== target) {
      if (B[i] !== target) {
        return Infinity;
      }
      n += 1;
    }
  }
  return n;
}
