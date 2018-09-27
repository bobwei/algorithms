/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*
  999
   99
*/

const toArray = (s) => {
  return s
    .split('')
    .map((c) => parseInt(c, 10))
    .reverse();
};

const toString = (arr) => {
  arr.reverse();
  /* remove leading zero */
  let i = 0;
  let isZero = true;
  for (; i < arr.length; i++) {
    if (arr[i] !== 0) {
      isZero = false;
      break;
    }
  }
  return isZero ? '0' : arr.slice(i).join('');
};

const multiply = function(num1, num2) {
  const arr1 = toArray(num1);
  const arr2 = toArray(num2);
  const output = new Array(arr1.length + arr2.length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      output[i + j] = output[i + j] + arr1[i] * arr2[j];
    }
  }
  let carry = 0;
  for (let i = 0; i < output.length; i++) {
    const sum = output[i] + carry;
    output[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  return toString(output);
};

export default multiply;
