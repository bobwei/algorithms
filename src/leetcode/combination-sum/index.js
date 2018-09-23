/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(
  candidates,
  target,
  startIndex = 0,
  selected = [],
  output = [],
) {
  const sum = selected.reduce((acc, cur) => acc + cur, 0);
  if (sum === target) {
    output.push([...selected]);
    return output;
  } else if (sum > target) {
    return output;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    selected.push(candidates[i]);
    combinationSum(candidates, target, i, selected, output);
    selected.pop();
  }
  return output;
};

export default combinationSum;
