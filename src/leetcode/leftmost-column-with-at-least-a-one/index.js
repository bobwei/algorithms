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
  const [m, n] = binaryMatrix.dimensions();
  let [i, j] = [0, n - 1];
  let output = Infinity;
  while (i < m && j >= 0) {
    const val = binaryMatrix.get(i, j);
    if (val === 0) {
      i += 1;
    } else if (val === 1) {
      output = Math.min(output, j);
      j -= 1;
    }
  }
  return output < Infinity ? output : -1;
};
