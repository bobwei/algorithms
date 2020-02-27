/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) {
    return N;
  }
  let x = 0;
  let y = 1;
  let dp;
  for (let i = 2; i <= N; i++) {
    dp = x + y;
    x = y;
    y = dp;
  }
  return dp;
};
