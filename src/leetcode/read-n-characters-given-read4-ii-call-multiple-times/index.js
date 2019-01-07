/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/*
  buf = 'abcdefghijklx'
  read(3)
  read(5)
  read(1)

*/

/**
 * @param {function} read4()
 * @return {function}
 */
const MAX_N_READ = 4;

const flush = (src, dst, n) => {
  dst.push(...src.slice(0, n));
  return src.slice(n);
};

var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  let tmp = [];
  return function(buf, n) {
    let total = 0;
    let nFlush = 0;
    let isEnded = false;
    nFlush = Math.min(tmp.length, n - total);
    tmp = flush(tmp, buf, nFlush);
    total += nFlush;
    while (total < n && !isEnded) {
      const nRead = read4(tmp);
      nFlush = Math.min(nRead, n - total);
      tmp = flush(tmp, buf, nFlush);
      total += nFlush;
      isEnded = nRead < MAX_N_READ;
    }
    return total;
  };
};
