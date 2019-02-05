/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
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
    let isEof = false;
    while (arr.length < n && !isEof) {
      const tmp = [];
      const nRead = read4(tmp);
      arr.push(...tmp);
      isEof = nRead < 4;
    }
    buf.push(...arr.slice(0, n));
    arr.splice(0, n);
  };
};
