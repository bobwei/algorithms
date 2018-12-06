/**
 * @param {number} n
 * @return {number[]}
 */

const toDec = (arr) => {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += 2 ** i * arr[i];
  }
  return output;
};

const helper = (n, arr = new Array(n).fill(0), output = new Set()) => {
  if (output.size >= 2 ** n) {
    return output;
  }
  const num = toDec(arr);
  if (output.has(num)) {
    return output;
  }
  output.add(num);
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] ^ 1;
    helper(n, arr, output);
    arr[i] = arr[i] ^ 1;
  }
  return output;
};

var grayCode = function(n) {
  return [...helper(n)];
};
