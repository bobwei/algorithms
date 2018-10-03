/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const trimZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return arr.slice(i);
    }
  }
  return arr.slice(0, 1);
};

var addBinary = function(a, b) {
  const output = [];
  let j = a.length - 1;
  let k = b.length - 1;
  let carry = 0;
  for (let i = 0; i < a.length + b.length; i++) {
    const sum = parseInt(a[j] || 0, 10) + parseInt(b[k] || 0, 10) + carry;
    output.unshift(sum % 2);
    carry = Math.floor(sum / 2);
    j -= 1;
    k -= 1;
  }
  return trimZero(output).join('');
};
