/**
 * @param {number} n
 * @return {string[]}
 */

const dp1 = ['0', '1', '8'];
const dp2 = ['00', '11', '69', '88', '96'];

const createNumbers = (arr, n) => {
  while (arr[0].length < n) {
    const c = arr.shift();
    arr.push('0' + c + '0');
    arr.push('1' + c + '1');
    arr.push('6' + c + '9');
    arr.push('8' + c + '8');
    arr.push('9' + c + '6');
  }
  return arr;
};

const isValid = (s) => {
  if (s.length <= 1) {
    return true;
  }
  return s[0] !== '0';
};

const getValidNumbers = (arr) => {
  return arr.filter(isValid);
};

var findStrobogrammatic = function(n) {
  if (n == 1) {
    return getValidNumbers(dp1);
  }
  if (n === 2) {
    return getValidNumbers(dp2);
  }
  let x = dp1;
  let y = dp2;
  let output;
  for (let i = 3; i <= n; i++) {
    output = createNumbers(x, i);
    x = y;
    y = output;
  }
  return getValidNumbers(output);
};
