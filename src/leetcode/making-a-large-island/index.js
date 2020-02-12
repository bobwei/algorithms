/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const set = new DisjointSet();
  // prettier-ignore
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const k1 = createKey(m, n, i, j);
        set.find(k1);
        for (const [di, dj] of dirs) {
          const x = i + di;
          const y = j + dj;
          if (isValid(m, n, x, y) && grid[x][y] === 1) {
            const k2 = createKey(m, n, x, y);
            set.union(k1, k2);
          }
        }
      }
    }
  }
  let max = set.maxSize;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const visited = new Set();
        let area = 1;
        for (const [di, dj] of dirs) {
          const x = i + di;
          const y = j + dj;
          if (isValid(m, n, x, y) && grid[x][y] === 1) {
            const key = createKey(m, n, x, y);
            const root = set.find(key);
            if (!visited.has(root)) {
              visited.add(root);
              area += set.getSize(root);
            }
          }
        }
        max = Math.max(max, area);
      }
    }
  }
  return max;
};

class DisjointSet {
  constructor() {
    this.roots = {};
    this.sizes = {};
  }

  union(a, b) {
    const r1 = this.find(a);
    const r2 = this.find(b);
    if (r1 !== r2) {
      this.roots[r2] = r1;
      this.sizes[r1] += this.sizes[r2];
    }
  }

  find(r) {
    if (!(r in this.roots)) {
      this.roots[r] = r;
      this.sizes[r] = 1;
    }
    let ptr = r;
    while (this.roots[ptr] !== ptr) {
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  getSize(r) {
    return this.sizes[r];
  }

  get maxSize() {
    return Math.max(...Object.values(this.sizes));
  }
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function createKey(m, n, i, j) {
  return n * i + j;
}
