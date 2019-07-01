/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function(nums) {
  const map = createMap(nums);
  return dfs(map, [1, 1]);
};

function dfs(map, root, sum = 0) {
  if (!(root in map)) {
    return 0;
  }
  sum += map[root];
  if (!(left(root) in map) && !(right(root) in map)) {
    return sum;
  }
  return dfs(map, left(root), sum) + dfs(map, right(root), sum);
}

function left([d, p]) {
  return [d + 1, 2 * p - 1];
}

function right([d, p]) {
  return [d + 1, 2 * p];
}

function createMap(nums) {
  const tuples = nums.map((num) => {
    return (num + '').split('').map((c) => parseInt(c));
  });
  const map = {};
  for (const [d, p, val] of tuples) {
    map[[d, p]] = val;
  }
  return map;
}
