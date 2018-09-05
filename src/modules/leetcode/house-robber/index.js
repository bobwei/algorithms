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
const rob = (arr) => {
  if (arr.length <= 0) {
    return 0;
  }
  if (arr.length <= 1) {
    return arr[0];
  }
  let x = arr[0];
  let y = Math.max(arr[0], arr[1]);
  let output = y;
  for (let i = 2; i < arr.length; i++) {
    output = Math.max(arr[i] + x, y);
    x = y;
    y = output;
  }
  return output;
};

export default rob;
