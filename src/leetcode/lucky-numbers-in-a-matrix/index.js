/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const set = new Set();
  for (let i = 0; i < m; i++) {
    const minInRow = Math.min(...matrix[i]);
    set.add(minInRow);
  }
  const output = [];
  for (let j = 0; j < n; j++) {
    const maxInCol = matrix.reduce((acc, row) => Math.max(acc, row[j]), -Infinity);
    if (set.has(maxInCol)) {
      output.push(maxInCol);
    }
  }
  return output;
};
