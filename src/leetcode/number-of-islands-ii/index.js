/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const getId = (x, y, m, n) => x * n + y;

const empty = null;

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
  const roots = new Array(m * n).fill(empty);
  const output = [];
  let count = 0;
  for (let i = 0; i < positions.length; i++) {
    const id = getId(positions[i][0], positions[i][1], m, n);
    roots[id] = id;
    count += 1;
    for (let j = 0; j < directions.length; j++) {
      const x = positions[i][0] + directions[j][0];
      const y = positions[i][1] + directions[j][1];
      const nextId = getId(x, y, m, n);
      if (x < 0 || x >= m || y < 0 || y >= n || roots[nextId] === empty) {
        continue;
      }
      const r1 = find(roots, id);
      const r2 = find(roots, getId(x, y, m, n));
      if (r1 !== r2) {
        union(roots, r1, r2);
        count -= 1;
      }
    }
    output.push(count);
  }
  return output;
};
