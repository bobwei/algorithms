/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const toNumArray = (str) => {
  return str
    .split('')
    .map((c) => parseInt(c))
    .reverse();
};

const trim = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return arr.slice(i);
    }
  }
  return arr.slice(0, 1);
};

var multiply = function(num1, num2) {
  const m = num1.length;
  const n = num2.length;
  const arr1 = toNumArray(num1);
  const arr2 = toNumArray(num2);
  const arr = new Array(m + n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i + j] += arr1[i] * arr2[j];
    }
  }
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i] + c;
    arr[i] = sum % 10;
    c = Math.floor(sum / 10);
  }
  return trim(arr.reverse()).join('');
};
