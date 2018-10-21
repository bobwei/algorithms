/**
 * @param {number} num
 * @return {string}
 */

const constants = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};

const transformHundred = (n) => {
  const arr = [];
  const d2 = Math.floor(n / 100);
  if (d2 > 0) {
    arr.push(constants[d2]);
    arr.push('Hundred');
  }
  const d10 = Math.floor(n % 100);
  if (d10 > 0) {
    if (constants[d10]) {
      arr.push(constants[d10]);
    } else {
      const d1 = Math.floor(d10 / 10) * 10;
      if (d1 > 0) {
        arr.push(constants[d1]);
      }
      const d0 = Math.floor(d10 % 10);
      if (d0 > 0) {
        arr.push(constants[d0]);
      }
    }
  }
  return arr;
};

const numberToWords = function(num) {
  if (num === 0) {
    return constants[num];
  }
  const arr = [];
  const d9 = Math.floor(num / 10 ** 9);
  if (d9 > 0) {
    arr.push(...transformHundred(d9));
    arr.push('Billion');
  }
  const d6 = Math.floor((num % 10 ** 9) / 10 ** 6);
  if (d6 > 0) {
    arr.push(...transformHundred(d6));
    arr.push('Million');
  }
  const d3 = Math.floor((num % 10 ** 6) / 10 ** 3);
  if (d3 > 0) {
    arr.push(...transformHundred(d3));
    arr.push('Thousand');
  }
  const d0 = Math.floor(num % 10 ** 3);
  if (d0 > 0) {
    arr.push(...transformHundred(d0));
  }
  return arr.join(' ');
};

export default numberToWords;
