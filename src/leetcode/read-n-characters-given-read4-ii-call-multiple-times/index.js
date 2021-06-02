/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  const arr = [];
  return function(buf, n) {
    while (arr.length < n) {
      const tmp = [];
      read4(tmp);
      arr.push(...tmp);
      if (tmp.length < 4) break;
    }
    buf.push(...arr.splice(0, n));
    return buf.length;
  };
};
