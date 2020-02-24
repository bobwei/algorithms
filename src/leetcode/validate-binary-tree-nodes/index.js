/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  const set = new DisjointSet();
  for (let i = 0; i < n; i++) {
    if (hasCycle(leftChild, rightChild, i, set)) {
      return false;
    }
  }
  return set.size(set.find(0)) === n;
};

function hasCycle(leftChild, rightChild, i, set, visited = new Set()) {
  if (visited.has(i)) {
    return true;
  }
  visited.add(i);
  if (leftChild[i] >= 0) {
    set.union(i, leftChild[i]);
  }
  if (rightChild[i] >= 0) {
    set.union(i, rightChild[i]);
  }
  return (
    (leftChild[i] >= 0 && hasCycle(leftChild, rightChild, leftChild[i], set, visited)) ||
    (rightChild[i] >= 0 && hasCycle(leftChild, rightChild, rightChild[i], set, visited))
  );
}

class DisjointSet {
  constructor() {
    this.roots = {};
    this.sizes = {};
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

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    if (r1 !== r2) {
      this.roots[r2] = r1;
      this.sizes[r1] += this.sizes[r2];
    }
  }

  size(r) {
    return this.sizes[r];
  }
}
