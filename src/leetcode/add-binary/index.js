/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const toNumArray = (str) => {
  return str
    .split('')
    .reverse()
    .map((c) => parseInt(c));
};

var addBinary = function(a, b) {
  const arr1 = toNumArray(a);
  const arr2 = toNumArray(b);
  let output = '';
  let c = 0;
  let i = 0;
  while (i < arr1.length || i < arr2.length || c) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0) + c;
    output = (sum % 2) + output;
    c = Math.floor(sum / 2);
    i += 1;
  }
  return output;
};
