/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const N = 10000;
  const set = new DisjointSet();
  for (const [x, y] of stones) {
    set.union(x, encode(N, y));
  }
  return stones.length - set.nRoots;
};

function encode(N, y) {
  return y + N;
}

class DisjointSet {
  constructor() {
    this.roots = {};
    this.nRoots = 0;
  }

  find(root) {
    if (!(root in this.roots)) {
      this.roots[root] = root;
      this.nRoots += 1;
      return root;
    }
    let ptr = root;
    while (this.roots[ptr] !== ptr) {
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    if (r1 !== r2) {
      this.roots[r2] = r1;
      this.nRoots -= 1;
    }
  }
}
