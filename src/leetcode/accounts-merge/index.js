/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const set = new DisjointSet();
  const map = {};
  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      map[email] = name;
      set.find(email);
    }
    for (let i = 0; i < emails.length - 1; i++) {
      set.union(emails[i], emails[i + 1]);
    }
  }
  const group = {};
  for (const email in set.roots) {
    const root = set.find(email);
    if (!(root in group)) {
      group[root] = [];
    }
    group[root].push(email);
  }
  const output = [];
  for (const root in group) {
    const name = map[root];
    output.push([name, ...group[root].sort()]);
  }
  return output;
};

class DisjointSet {
  constructor() {
    this.roots = {};
  }

  find(p) {
    if (!(p in this.roots)) {
      this.roots[p] = p;
    }
    let ptr = p;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    this.roots[r2] = r1;
  }
}
