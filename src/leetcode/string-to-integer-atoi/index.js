/**
 * @param {string} str
 * @return {number}
 */

const isValidNumber = (str) => /[0-9|\-|+]/.test(str);
const isSign = (str) => /-|\+/.test(str);
const MAX = 2 ** 31 - 1;
const MIN = 2 ** 31 * -1;

var myAtoi = function(str) {
  let isNonWhiteSpaceFound = false;
  let sign = null;
  let output = null;
  for (let i = 0; i < str.length; i++) {
    if (!isNonWhiteSpaceFound) {
      if (str[i] === ' ') {
        continue;
      }
      if (!isValidNumber(str[i])) {
        return 0;
      }
      isNonWhiteSpaceFound = true;
    }
    if (str[i] === ' ' || !isValidNumber(str[i])) {
      break;
    }
    if (isSign(str[i])) {
      if (sign !== null) {
        break;
      }
      if (output !== null) {
        break;
      }
      sign = str[i] === '-' ? -1 : 1;
      continue;
    }
    output = (output || 0) * 10;
    output = output + parseInt(str[i], 10);
  }
  output = (output || 0) * (sign || 1);
  if (output > MAX) {
    return MAX;
  }
  if (output < MIN) {
    return MIN;
  }
  return output;
};
