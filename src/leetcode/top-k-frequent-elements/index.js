/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = createFreq(nums);
  const map = createMap(freq);
  const output = [];
  for (let f = nums.length; f >= 0; f--) {
    if (map.has(f)) {
      output.push(...map.get(f));
    }
    if (output.length >= k) {
      return output;
    }
  }
  return output;
};

function createFreq(nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  return freq;
}

function createMap(freq) {
  const map = new Map();
  for (const [num, count] of freq) {
    if (!map.has(count)) map.set(count, []);
    map.get(count).push(num);
  }
  return map;
}
