/**
 * @param {number[]} nums
 * @return {number}
 */
// f(i) = Math.max(arr[i] + f(i - 2), f(i - 1))
// f(0) = arr[0]
// f(1) = Math.max(arr[0], arr[1])

const fn = (arr) => {
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

const rob = function(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  if (arr.length <= 1) {
    return arr[0];
  }
  return Math.max(
    fn(arr.slice(1, -1)),
    fn(arr.slice(0, -1)),
    fn(arr.slice(1, arr.length)),
  );
};

export default rob;
