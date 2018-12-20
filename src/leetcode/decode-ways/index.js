/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let output = parseInt(s[0]) > 0 ? 1 : 0;
  let x = 1;
  let y = output;
  for (let i = 1; i < s.length; i++) {
    const d1 = parseInt(s.slice(i, i + 1));
    const d2 = parseInt(s.slice(i - 1, i + 1));
    output = 0;
    if (d2 >= 10 && d2 <= 26) {
      output += x;
    }
    if (d1 > 0) {
      output += y;
    }
    x = y;
    y = output;
  }
  return output;
};
