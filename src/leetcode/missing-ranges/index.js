/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

const createRangeSummary = (nums) => {
  if (!nums.length) {
    return [];
  }
  const output = [[nums[0], nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const lastRange = output[output.length - 1];
    if (nums[i] === lastRange[1] + 1) {
      lastRange[1] = nums[i];
    } else if (nums[i] !== lastRange[1]) {
      output.push([nums[i], nums[i]]);
    }
  }
  return output;
};

const format = (arr) => {
  return arr.map(([n1, n2]) => (n1 !== n2 ? `${n1}->${n2}` : `${n1}`));
};

var findMissingRanges = function(nums, lower, upper) {
  const rangeSummary = createRangeSummary(nums);
  if (!rangeSummary.length) {
    return format([[lower, upper]]);
  }
  const output = [];
  if (lower < rangeSummary[0][0]) {
    output.push([lower, rangeSummary[0][0] - 1]);
  }
  for (let i = 0; i < rangeSummary.length - 1; i++) {
    const range = rangeSummary[i];
    const nextRange = rangeSummary[i + 1];
    output.push([range[1] + 1, nextRange[0] - 1]);
  }
  if (upper > rangeSummary[rangeSummary.length - 1][1]) {
    output.push([rangeSummary[rangeSummary.length - 1][1] + 1, upper]);
  }
  return format(output);
};
