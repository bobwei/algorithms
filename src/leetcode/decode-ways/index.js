/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length;
  let x = 1;
  let y = parseInt(s[0]) > 0 ? 1 : 0;
  let output = y;
  for (let i = 2; i <= n; i++) {
    const d1 = parseInt(s.substring(i - 1, i));
    const d2 = parseInt(s.substring(i - 2, i));
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
