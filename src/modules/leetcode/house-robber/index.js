/**
 * @param {number[]} nums
 * @return {number}
 */
/*
f(n) = max(arr[n] + f(n - 2), f(n - 1))
f(0) = arr[0]
f(1) = max(arr[0], arr[1])
f(2) = max(arr[2] + f(0), f(1))
*/
const rob = nums => {
  if (!nums.length) {
    return 0;
  }
  const output = new Array(nums);
  output[0] = nums[0];
  output[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    output[i] = Math.max(nums[i] + output[i - 2], output[i - 1]);
  }
  return output[nums.length - 1];
};

export default rob;
