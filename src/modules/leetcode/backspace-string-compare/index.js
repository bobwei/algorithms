/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/*
  S = "xywrrmp", T = "xywrrmu#p"
*/
const backspaceCompare = function(S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  while (i >= 0 || j >= 0) {
    let skips;
    skips = 0;
    while (i >= 0) {
      if (S[i] === '#') {
        i -= 1;
        skips += 1;
      } else if (skips > 0) {
        i -= 1;
        skips -= 1;
      } else {
        break;
      }
    }
    skips = 0;
    while (j >= 0) {
      if (T[j] === '#') {
        j -= 1;
        skips += 1;
      } else if (skips > 0) {
        j -= 1;
        skips -= 1;
      } else {
        break;
      }
    }
    if (S[i] !== T[j]) {
      return false;
    }
    i -= 1;
    j -= 1;
  }
  return true;
};

export default backspaceCompare;
