/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let x = 1;
  let y = parseInt(s[0]) > 0 ? 1 : 0;
  let output = y;
  for (let i = 2; i <= s.length; i++) {
    // prettier-ignore
    output = (isDecodable(s.substring(i - 1, i)) ? y : 0) +
      (isDecodable(s.substring(i - 2, i)) ? x : 0);
    x = y;
    y = output;
  }
  return output;
};

function isDecodable(s) {
  const num = parseInt(s);
  if (s.length === 1) {
    return num > 0;
  }
  return num >= 10 && num <= 26;
}
