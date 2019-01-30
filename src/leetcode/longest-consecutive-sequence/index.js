/**
 * @param {number[]} nums
 * @return {number}
 */

const find = (roots, r) => {
  let ptr = r;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, r1, r2) => {
  roots[r2] = r1;
};

var longestConsecutive = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const roots = {};
  const counts = {};
  let max = 1;
  for (const num of nums) {
    if (roots[num] !== undefined) continue;
    if (roots[num] === undefined) roots[num] = num;
    if (counts[num] === undefined) counts[num] = 1;
    if (roots[num - 1] !== undefined) {
      const r1 = find(roots, num - 1);
      const r2 = find(roots, num);
      union(roots, r1, r2);
      counts[r1] += counts[r2];
      max = Math.max(max, counts[r1]);
    }
    if (roots[num + 1] !== undefined) {
      const r1 = find(roots, num);
      const r2 = find(roots, num + 1);
      union(roots, r1, r2);
      counts[r1] += counts[r2];
      max = Math.max(max, counts[r1]);
    }
  }
  return max;
};
