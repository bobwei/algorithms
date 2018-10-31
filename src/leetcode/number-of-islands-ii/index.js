/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

const EMPTY = -1;
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const getId = (m, n, i, j) => {
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return EMPTY;
  }
  return n * i + j;
};

const find = (roots, v) => {
  if (roots[v] === EMPTY || v === EMPTY) {
    return EMPTY;
  }
  let ptr = v;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

var numIslands2 = function(m, n, positions) {
  const output = [];
  let count = 0;
  const roots = new Array(m * n).fill(EMPTY);
  for (let i = 0; i < positions.length; i++) {
    const [x, y] = positions[i];
    const id = getId(m, n, x, y);
    if (roots[id] === EMPTY) {
      roots[id] = id;
      count += 1;
    }
    for (let j = 0; j < dirs.length; j++) {
      const ri = find(roots, id);
      const rj = find(roots, getId(m, n, x + dirs[j][0], y + dirs[j][1]));
      if (rj !== EMPTY && ri !== rj) {
        roots[ri] = rj;
        count -= 1;
      }
    }
    output.push(count);
  }
  return output;
};
