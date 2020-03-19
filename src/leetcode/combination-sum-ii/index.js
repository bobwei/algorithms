/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  return helper(candidates, target);
};

function helper(candidates, target, index = 0, sum = 0, selected = [], output = []) {
  if (sum >= target) {
    if (sum === target) {
      output.push([...selected]);
    }
    return output;
  }
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    selected.push(candidates[i]);
    helper(candidates, target, i + 1, sum + candidates[i], selected, output);
    selected.pop();
  }
  return output;
}
