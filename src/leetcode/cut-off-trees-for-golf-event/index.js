/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  if (!forest.length || !forest[0].length) {
    return 0;
  }
  const m = forest.length;
  const n = forest[0].length;
  const trees = getTrees(forest, m, n);
  let nSteps = 0;
  let position = [0, 0];
  while (trees.length) {
    const distance = [...new Array(m)].map(() => new Array(n).fill(Infinity));
    const [dest] = trees.shift();
    const [i, j] = dest;
    bfs(forest, m, n, position, distance);
    if (distance[i][j] >= Infinity) {
      return -1;
    }
    nSteps += distance[i][j];
    position = dest;
  }
  return nSteps;
};

function getTrees(forest, m, n) {
  const trees = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) {
        trees.push([[i, j], forest[i][j]]);
      }
    }
  }
  return trees.sort((a, b) => a[1] - b[1]);
}

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(forest, m, n, position, distance) {
  distance[position[0]][position[1]] = 0;
  const queue = [[position, 0]];
  while (queue.length) {
    const [[x, y], d] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(i, j, m, n) && forest[i][j] > 0 && d + 1 < distance[i][j]) {
        distance[i][j] = d + 1;
        queue.push([[i, j], d + 1]);
      }
    }
  }
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
