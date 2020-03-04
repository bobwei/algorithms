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
    }
    for (let i = 0; i < emails.length - 1; i++) {
      set.union(emails[i], emails[i + 1]);
    }
  }
  const group = {};
  for (const email in map) {
    const key = set.find(email);
    if (!(key in group)) group[key] = [];
    group[key].push(email);
  }
  const output = [];
  for (const key in group) {
    output.push([map[key], ...group[key].sort()]);
  }
  return output;
};

class DisjointSet {
  constructor() {
    this.roots = {};
  }

  find(r) {
    if (!(r in this.roots)) {
      this.roots[r] = r;
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
    }
  }
}
