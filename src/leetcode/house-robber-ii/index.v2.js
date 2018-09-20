/**
 * @param {number[]} nums
 * @return {number}
 */
// f(i) = Math.max(arr[i] + f(i - 2), f(i - 1))
// f(0) = arr[0]
// f(1) = Math.max(arr[0], arr[1])

const fn = (arr, start, end) => {
  if (end - start <= 0) {
    return 0;
  }
  if (end - start <= 1) {
    return arr[start];
  }
  let x = arr[start];
  let y = Math.max(arr[start], arr[start + 1]);
  let output = y;
  for (let i = start + 2; i < end; i++) {
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
    fn(arr, 1, arr.length - 1),
    fn(arr, 0, arr.length - 1),
    fn(arr, 1, arr.length),
  );
};

export default rob;
