/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const output = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    // prettier-ignore
    const interval = [
      Math.max(A[i][0], B[j][0]),
      Math.min(A[i][1], B[j][1]),
    ];
    if (isValid(interval)) {
      output.push(interval);
    }
    if (A[i][1] < B[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return output;
};

function isValid([start, end]) {
  if (end < start) {
    return false;
  }
  return true;
}
