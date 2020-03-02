/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const freq = createFreq(nums);
  const map = createMap(freq);
  return nums.map((num) => map[num]);
};

function createMap(freq) {
  const map = {};
  let count = 0;
  for (let i = 0; i <= 100; i++) {
    map[i] = count;
    count += freq[i] || 0;
  }
  return map;
}

function createFreq(nums) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
