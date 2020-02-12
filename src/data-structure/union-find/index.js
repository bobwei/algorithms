export default class DisjointSet {
  constructor(length) {
    this.roots = [...new Array(length)].map((_, i) => i);
    this.sizes = new Array(length).fill(1);
  }

  find(r) {
    let ptr = r;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(i1, i2) {
    const r1 = this.find(i1);
    const r2 = this.find(i2);
    this.roots[r2] = r1;
    this.sizes[r1] += this.sizes[r2];
  }
}
