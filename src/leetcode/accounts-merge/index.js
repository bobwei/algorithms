/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const map = {};
  const set = new DisjointSet();
  for (const account of accounts) {
    const [name, first, ...emails] = account;
    map[first] = name;
    set.find(first);
    for (const email of emails) {
      map[email] = name;
      set.union(set.find(first), set.find(email));
    }
  }
  const groups = {};
  for (const email in set.roots) {
    const root = set.find(set.roots[email]);
    if (!(root in groups)) groups[root] = [];
    groups[root].push(email);
  }
  // prettier-ignore
  const output = Object
    .entries(groups)
    .map(([key, value]) => [map[key], ...value.sort()]);
  return output;
};

class DisjointSet {
  constructor() {
    this.roots = {};
  }

  find(r) {
    if (!(r in this.roots)) this.roots[r] = r;
    let ptr = r;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(r1, r2) {
    this.roots[r2] = r1;
  }
}
