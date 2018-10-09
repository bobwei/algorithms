/**
 * @param {string} s
 * @return {number}
 */

/*
  f(n) = f(n - 1), if 1 <= d1 <= 9
       + f(n - 2), if 10 <= d2 <= 26
  f(n - 2) => x
  f(n - 1) => y
*/

var numDecodings = function(s) {
  let output = parseInt(s[0]) > 0 ? 1 : 0;
  let x = 1;
  let y = output;
  for (let i = 0; i < s.length; i++) {
    const d1 = parseInt(s.slice(i, i + 1));
    const d2 = parseInt(s.slice(i - 1, i + 1));
    output = (d1 > 0 ? y : 0) + (10 <= d2 && d2 <= 26 ? x : 0);
    x = y;
    y = output;
  }
  return output;
};
