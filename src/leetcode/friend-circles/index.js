/**
 * @param {number[][]} M
 * @return {number}
 */

const find = (roots, v) => {
  let ptr = v;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, v1, v2) => {
  roots[v2] = v1;
};

var findCircleNum = function(M) {
  const n = M.length;
  const roots = [...new Array(n)].map((_, i) => i);
  let count = n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        const r1 = find(roots, i);
        const r2 = find(roots, j);
        if (r1 !== r2) {
          count -= 1;
          union(roots, r1, r2);
        }
      }
    }
  }
  return count;
};
