/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let output = parseInt(s[0]) > 0 ? 1 : 0;
  let x = output;
  let y = output;
  for (let i = 1; i < s.length; i++) {
    output = 0;
    const d2 = parseInt(s.slice(i - 1, i + 1));
    const d1 = parseInt(s.slice(i, i + 1));
    if (10 <= d2 && d2 <= 26) {
      output += x;
    }
    if (0 < d1) {
      output += y;
    }
    x = y;
    y = output;
  }
  return output;
};
