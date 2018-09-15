/**
 * @param {number} n
 * @return {number}
 */
/*
  f(n) = f(n - 1) + f(n - 2)
  f(0) = 1 => x
  f(1) = 1 => y
  f(2) = 1 + 1
  f(3) = 1 + 2
*/
const climbStairs = function(n) {
  if (n <= 1) {
    return 1;
  }
  let x = 1;
  let y = 1;
  let output;
  for (let i = 2; i <= n; i++) {
    output = x + y;
    x = y;
    y = output;
  }
  return output;
};

export default climbStairs;
