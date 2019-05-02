/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const output = [];
  while (A.length && B.length) {
    const interval = findIntersection(A[0], B[0]);
    if (interval) {
      output.push(interval);
    }
    if (A[0][1] < B[0][1]) {
      A.shift();
    } else {
      B.shift();
    }
  }
  return output;
};

function findIntersection(interval1, interval2) {
  if (interval1[0] > interval2[0]) {
    return findIntersection(interval2, interval1);
  }
  if (interval2[0] > interval1[1]) {
    return null;
  }
  return [Math.max(interval1[0], interval2[0]), Math.min(interval1[1], interval2[1])];
}
