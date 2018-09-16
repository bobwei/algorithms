/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
  11000
  11000
  00100
  00011
*/

const visit = (grid, isVisited, i, j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
    return;
  }
  if (grid[i][j] === '1' && !isVisited[i][j]) {
    isVisited[i][j] = true;
    visit(grid, isVisited, i - 1, j);
    visit(grid, isVisited, i, j + 1);
    visit(grid, isVisited, i + 1, j);
    visit(grid, isVisited, i, j - 1);
  }
};

const numIslands = function(grid) {
  if (!grid.length) {
    return 0;
  }
  if (!grid[0].length) {
    return 0;
  }
  const isVisited = [...new Array(grid.length)].map(() =>
    new Array(grid[0].length).fill(false),
  );
  let nIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!isVisited[i][j] && grid[i][j] === '1') {
        nIslands += 1;
        visit(grid, isVisited, i, j);
      }
    }
  }
  return nIslands;
};

export default numIslands;
