/**
 * @param {number} num
 * @return {string}
 */
const units = ['', 'Thousand', 'Million', 'Billion'];
const numbers = {
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

var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }
  let output = '';
  let n = num;
  for (const unit of units) {
    if (n % 1000 > 0) {
      output = helper(n % 1000).trim() + ' ' + unit + ' ' + output;
    }
    n = Math.floor(n / 1000);
  }
  return output.trim();
};

function helper(num) {
  if (num in numbers) {
    return numbers[num];
  }
  if (num < 100) {
    return helper(10 * Math.floor(num / 10)) + ' ' + helper(num % 10);
  }
  return helper(Math.floor(num / 100)) + ' Hundred ' + helper(num % 100);
}
