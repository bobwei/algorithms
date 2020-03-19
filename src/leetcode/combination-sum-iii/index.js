/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, num = 1, sum = 0, selected = [], output = []) {
  if (selected.length >= k) {
    if (selected.length === k && sum === n) {
      output.push([...selected]);
    }
    return output;
  }
  for (let i = num; i <= 9; i++) {
    if (sum + i > n) break;
    selected.push(i);
    combinationSum3(k, n, i + 1, sum + i, selected, output);
    selected.pop();
  }
  return output;
};
