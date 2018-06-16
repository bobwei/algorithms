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
  if (nums.length <= 0) {
    return 0;
  }
  if (nums.length <= 1) {
    return nums[0];
  }
  let nMinus2 = nums[0];
  let nMinus1 = Math.max(nums[0], nums[1]);
  let n = Math.max(nMinus1, nMinus2);
  for (let i = 2; i < nums.length; i++) {
    n = Math.max(nums[i] + nMinus2, nMinus1);
    nMinus2 = nMinus1;
    nMinus1 = n;
  }
  return n;
};

export default rob;
