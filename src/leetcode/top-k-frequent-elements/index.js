/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const bucket = Object.entries(freq).reduce((acc, [char, count]) => {
    if (!(count in acc)) acc[count] = [];
    acc[count].push(char);
    return acc;
  }, {});
  const output = [];
  let j = k;
  for (let i = nums.length; i >= 0; i--) {
    if (i in bucket) {
      output.push(...bucket[i]);
      j -= bucket[i].length;
      if (j <= 0) {
        return output;
      }
    }
  }
  return output;
};
