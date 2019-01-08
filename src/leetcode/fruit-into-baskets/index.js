/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  const counts = {};
  let nUniques = 0;
  let nTotal = 0;
  let left = 0;
  let max = 0;
  for (let i = 0; i < tree.length; i++) {
    if (!counts[tree[i]]) {
      nUniques += 1;
    }
    counts[tree[i]] = (counts[tree[i]] || 0) + 1;
    nTotal += 1;
    if (nUniques <= 2) {
      max = Math.max(max, nTotal);
    }
    while (nUniques > 2) {
      counts[tree[left]] -= 1;
      nTotal -= 1;
      if (!counts[tree[left]]) {
        nUniques -= 1;
      }
      left += 1;
    }
  }
  return max;
};
