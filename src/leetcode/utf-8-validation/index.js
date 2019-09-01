/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  if (!data.length) {
    return false;
  }
  for (let i = 0; i < data.length; ) {
    if (data[i] >= 256) {
      return false;
    }
    const nBytes = getNBytes(data[i]);
    if (nBytes < 0) {
      return false;
    }
    for (let j = 1; j < nBytes; j++) {
      if (i + j > data.length || (data[i + j] & 192) !== 128) {
        return false;
      }
    }
    i += nBytes;
  }
  return true;
};

function getNBytes(n) {
  if ((n & 128) === 0) {
    return 1;
  }
  if ((n & 224) === 192) {
    return 2;
  }
  if ((n & 240) === 224) {
    return 3;
  }
  if ((n & 248) === 240) {
    return 4;
  }
  return -1;
}
