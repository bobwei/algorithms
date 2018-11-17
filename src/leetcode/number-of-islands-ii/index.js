/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const toIndex = (i, j, m, n) => n * i + j;

const find = (roots, v) => {
  let ptr = v;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, r1, r2) => {
  roots[r2] = r1;
};

var numIslands2 = function(m, n, positions) {
  const roots = new Array(m * n);
  const output = [];
  let count = 0;
  for (let i = 0; i < positions.length; i++) {
    const index = toIndex(positions[i][0], positions[i][1], m, n);
    roots[index] = index;
    count += 1;
    for (let j = 0; j < directions.length; j++) {
      const x = positions[i][0] + directions[j][0];
      const y = positions[i][1] + directions[j][1];
      if (x < 0 || x >= m || y < 0 || y >= n) {
        continue;
      }
      const nextIndex = toIndex(x, y, m, n);
      const ri = find(roots, index);
      const rj = find(roots, nextIndex);
      if (rj !== undefined && rj !== ri) {
        union(roots, ri, rj);
        count -= 1;
      }
    }
    output.push(count);
  }
  return output;
};
