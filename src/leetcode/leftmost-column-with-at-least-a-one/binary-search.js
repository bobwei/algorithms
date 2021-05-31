/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  let output = Infinity;
  const [m, n] = binaryMatrix.dimensions();
  for (let i = 0; i < m; i++) {
    const col = lowerBound(binaryMatrix, i, n, 1);
    if (col < n) {
      output = Math.min(output, col);
    }
  }
  return output < Infinity ? output : -1;
};

function lowerBound(matrix, i, n, target) {
  let left = 0;
  let right = n;
  while (left < right) {
    const m = Math.floor((left + right) / 2);
    if (target <= matrix.get(i, m)) {
      right = m;
    } else {
      left = m + 1;
    }
  }
  return left;
}
