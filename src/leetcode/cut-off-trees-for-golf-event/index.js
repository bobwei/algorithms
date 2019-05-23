/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  const m = forest.length;
  const n = forest[0].length;
  const trees = getTrees(forest, m, n);
  let nSteps = 0;
  let origin = [0, 0];
  while (trees.length) {
    const distance = [...new Array(m)].map(() => new Array(n).fill(Infinity));
    const dest = trees.shift();
    bfs(forest, m, n, origin, distance);
    if (distance[dest[0]][dest[1]] >= Infinity) {
      return -1;
    }
    nSteps += distance[dest[0]][dest[1]];
    origin = dest;
  }
  return nSteps;
};

function getTrees(forest, m, n) {
  const trees = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) {
        trees.push([i, j, forest[i][j]]);
      }
    }
  }
  return trees.sort((a, b) => a[2] - b[2]);
}

const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

function bfs(forest, m, n, origin, distance) {
  distance[origin[0]][origin[1]] = 0;
  const queue = [[origin, 0]];
  while (queue.length) {
    const [p, d] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = p[0] + di;
      const j = p[1] + dj;
      if (isValid(i, j, m, n) && d + 1 < distance[i][j] && forest[i][j] > 0) {
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
