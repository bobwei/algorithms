/**
 * @param {number} n
 * @return {string[]}
 */

const dp1 = ['0', '1', '8'];
const dp2 = ['00', '11', '69', '88', '96'];

var findStrobogrammatic = function(n) {
  if (n === 1) {
    return dp1.filter(isValid);
  }
  if (n === 2) {
    return dp2.filter(isValid);
  }
  let x = dp1;
  let y = dp2;
  for (let i = 3; i <= n; i++) {
    const arr = createNumbers(x);
    x = y;
    y = arr;
  }
  return y.filter(isValid);
};

function createNumbers(arr) {
  const output = [];
  for (const num of arr) {
    output.push('0' + num + '0');
    output.push('1' + num + '1');
    output.push('6' + num + '9');
    output.push('8' + num + '8');
    output.push('9' + num + '6');
  }
  return output;
}

function isValid(num) {
  if (num[0] === '0') {
    return num.length <= 1;
  }
  return true;
}
