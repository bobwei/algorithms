/**
 * @param {string} s
 * @return {number}
 */
/*
  226
  f(i) = f(i - 2) { if s.slice(i - 1, i + 1) <= 26 && s.slice(i - 1, i + 1) > 0 } +
         f(i - 1) { if s.slice(i, i + 1) > 0 }
  f(0) = 1
  f(1) = 1
  f(2) = 1 + 1 = 2
*/
const numDecodings = function(s) {
  let output = parseInt(s[0], 10) > 0 ? 1 : 0;
  let x = output;
  let y = output;
  for (let i = 1; i < s.length; i++) {
    const twoDigit = parseInt(s.slice(i - 1, i + 1), 10);
    const oneDigit = parseInt(s.slice(i, i + 1), 10);
    const isTwoDigitValid =
      twoDigit <= 26 && twoDigit > 0 && s.slice(i - 1, i) !== '0';
    output = (isTwoDigitValid ? x : 0) + (oneDigit > 0 ? y : 0);
    x = y;
    y = output;
  }
  return output;
};

export default numDecodings;
