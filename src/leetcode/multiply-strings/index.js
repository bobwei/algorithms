/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const toIntArr = (str) => {
  return str
    .split('')
    .reverse()
    .map((c) => parseInt(c));
};

const removeZeroPadding = (arr) => {
  let i = 0;
  while (arr[i] <= 0) {
    i += 1;
  }
  if (i >= arr.length) {
    return [0];
  }
  return arr.slice(i);
};

const multiply = function(num1, num2) {
  const arr1 = toIntArr(num1);
  const arr2 = toIntArr(num2);
  const arr = new Array(num1.length + num2.length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr[i + j] += arr1[i] * arr2[j];
    }
  }
  let carry = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i] + carry;
    arr[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  return removeZeroPadding(arr.reverse()).join('');
};

export default multiply;
