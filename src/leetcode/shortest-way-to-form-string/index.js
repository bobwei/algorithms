/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */

var shortestWay = function(source, target) {
  let i = 0;
  let nWays = 0;
  while (i < target.length) {
    const length = dfs(source, target, 0, i);
    if (!length) {
      return -1;
    }
    nWays += 1;
    i += length;
  }
  return nWays;
};

function dfs(source, target, si, tj) {
  for (let i = si; i < source.length; i++) {
    if (source[i] === target[tj]) {
      return dfs(source, target, i + 1, tj + 1) + 1;
    }
  }
  return 0;
}
