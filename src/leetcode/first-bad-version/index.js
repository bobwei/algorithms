/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const m = Math.floor((left + right) / 2);
      if (isBadVersion(m)) {
        right = m;
      } else {
        left = m + 1;
      }
    }
    return left;
  };
};
