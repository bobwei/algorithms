/**
 * @param {number} num
 * @return {string}
 */

/* 1 234 567 891 */

/* n = d2 * 100 + d1 * 10 + d0 */
const transformHundred = (n) => {
  const output = [];

  /* handle hundred */
  const d2 = Math.floor(n / 100);
  if (d2 > 0) {
    output.push(constants[d2]);
    output.push('Hundred');
  }

  /* handle 1 ~ 99 */
  const d1d2 = n % 100;
  if (d1d2 <= 19 && d1d2 > 0) {
    /* handle 1 ~ 19 */
    output.push(constants[d1d2]);
  } else {
    /* handle 1 ~ 19 */
    const d1 = Math.floor((n % 100) / 10) * 10;
    if (d1 > 0) {
      output.push(constants[d1]);
    }
    const d0 = n % 10;
    if (d0 > 0) {
      output.push(constants[d0]);
    }
  }

  return output;
};

const numberToWords = function(num) {
  if (num <= 0) {
    return constants[num];
  }

  const output = [];

  // billion
  const d9 = Math.floor(num / 1000000000);
  if (d9 > 0) {
    output.push(...transformHundred(d9));
    output.push('Billion');
  }
  num %= 1000000000;

  // million
  const d876 = Math.floor(num / 1000000);
  if (d876 > 0) {
    output.push(...transformHundred(d876));
    output.push('Million');
  }
  num %= 1000000;

  // thousand
  const d543 = Math.floor(num / 1000);
  if (d543 > 0) {
    output.push(...transformHundred(d543));
    output.push('Thousand');
  }
  num %= 1000;

  // 1 ~ 999
  const d210 = Math.floor(num / 1);
  if (d210 > 0) {
    output.push(...transformHundred(d210));
  }

  return output.join(' ');
};

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

export default numberToWords;
