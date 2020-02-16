/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let i = 0;
  let j = n;
  let nNegatives = 0;
  while (i < m && j >= 0) {
    while (grid[i][j - 1] < 0) {
      j -= 1;
    }
    nNegatives += n - j;
    i += 1;
  }
  return nNegatives;
};
