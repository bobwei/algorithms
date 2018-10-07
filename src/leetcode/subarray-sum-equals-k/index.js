/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
  const sums = new Map([[0, [0]]]);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sums.get(sum - k)) {
      count += sums.get(sum - k).length;
    }
    if (!sums.get(sum)) {
      sums.set(sum, []);
    }
    sums.get(sum).push(i);
  }
  return count;
};
