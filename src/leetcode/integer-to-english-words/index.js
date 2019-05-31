/**
 * @param {number} num
 * @return {string}
 */

const map = {
  0: '',
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

const units = ['', ' Thousand ', ' Million ', ' Billion '];

var numberToWords = function(num) {
  if (!num) {
    return 'Zero';
  }
  let output = '';
  let n = num;
  for (let i = 0; i < units.length; i++) {
    const r = n % 1000;
    if (r) {
      output = helper(r).trim() + units[i] + output;
    }
    n = Math.floor(n / 1000);
  }
  return output.trim();
};

function helper(num) {
  if (num < 20) {
    return map[num];
  } else if (num < 100) {
    const ten = Math.floor(num / 10) * 10;
    const r = num % 10;
    // prettier-ignore
    return r > 0
      ? map[ten] + ' ' + map[r]
      : map[ten];
  } else {
    const hundred = Math.floor(num / 100);
    const r = num % 100;
    return map[hundred] + ' Hundred ' + helper(r);
  }
}
