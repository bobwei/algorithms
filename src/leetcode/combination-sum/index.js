/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  return helper(candidates, target);
};

function helper(candidates, target, sum = 0, index = 0, selected = [], output = []) {
  if (sum >= target) {
    if (sum === target) {
      output.push([...selected]);
    }
    return output;
  }
  for (let i = index; i < candidates.length; i++) {
    if (sum + candidates[i] > target) break;
    selected.push(candidates[i]);
    helper(candidates, target, sum + candidates[i], i, selected, output);
    selected.pop();
  }
  return output;
}
