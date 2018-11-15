/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

const find = (roots, v) => {
  let ptr = v;
  while (roots[ptr] !== ptr) {
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, r1, r2) => {
  roots[r2] = r1;
};

var accountsMerge = function(accounts) {
  const roots = {};
  const owners = {};
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      roots[accounts[i][j]] = accounts[i][j];
      owners[accounts[i][j]] = accounts[i][0];
    }
  }
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 2; j < accounts[i].length; j++) {
      const r1 = find(roots, accounts[i][1]);
      const rj = find(roots, accounts[i][j]);
      union(roots, r1, rj);
    }
  }
  const results = {};
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const rj = find(roots, accounts[i][j]);
      const owner = owners[rj];
      if (!results[rj]) {
        results[rj] = new Set();
      }
      results[rj].add(accounts[i][j]);
    }
  }
  return Object.keys(results).map((email) => [owners[email], ...[...results[email]].sort()]);
};
