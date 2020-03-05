/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let x = 1;
  let y = isDecodable(s[0]) ? 1 : 0;
  let dp = y;
  for (let i = 1; i < s.length; i++) {
    const suffix2 = s.substring(i - 1, i + 1);
    const suffix1 = s.substring(i, i + 1);
    dp = (isDecodable(suffix2) ? x : 0) + (isDecodable(suffix1) ? y : 0);
    x = y;
    y = dp;
  }
  return dp;
};

function isDecodable(str) {
  const num = parseInt(str);
  if (str.length === 1) {
    return num > 0;
  }
  if (str.length === 2) {
    return num >= 10 && num <= 26;
  }
}
