/**
 * @param {string} s
 * @return {number}
 */
/*
  dp[i] = dp[i - 2], if 10 <= s[i - 1: i + 1] <= 26
        + dp[i - 1], if s[i - 1, i] > 0
*/
var numDecodings = function(s) {
  let x = 1;
  let y = parseInt(s[0]) > 0 ? 1 : 0;
  let output = y;
  for (let i = 2; i <= s.length; i++) {
    const d2 = parseInt(s.substring(i - 2, i));
    const d1 = parseInt(s.substring(i - 1, i));
    output = (d2 >= 10 && d2 <= 26 ? x : 0) + (d1 > 0 ? y : 0);
    x = y;
    y = output;
  }
  return output;
};
