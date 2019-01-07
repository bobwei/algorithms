/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

const MAX_N_READ = 4;

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let total = 0;
    let isEnded = false;
    while (total < n && !isEnded) {
      const tmp = [];
      const nRead = read4(tmp);
      const nFlush = Math.min(MAX_N_READ, n - total);
      buf.push(...tmp.slice(0, nFlush));
      total += nFlush;
      isEnded = nRead < MAX_N_READ;
    }
    return total;
  };
};
