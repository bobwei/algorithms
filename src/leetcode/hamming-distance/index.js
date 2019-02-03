/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xor = x ^ y;
  let output = 0;
  while (xor >= 1) {
    if (xor % 2 === 1) {
      output += 1;
    }
    xor >>= 1;
  }
  return output;
};
