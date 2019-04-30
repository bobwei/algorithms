/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const m = a.length;
  const n = b.length;
  let i = 1;
  let c = 0;
  let output = '';
  while (c > 0 || m - i >= 0 || n - i >= 0) {
    // prettier-ignore
    const sum =
      (m - i >= 0 ? parseInt(a[m - i]) : 0) +
      (n - i >= 0 ? parseInt(b[n - i]) : 0) +
      c;
    output = (sum % 2) + output;
    c = Math.floor(sum / 2);
    i += 1;
  }
  return output;
};
