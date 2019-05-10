/**
 * @param {string} s
 * @return {number}
 */
/*
  dp[i] = (() => {
    let min = Infinity;
    for (let j = 1; j <= i; j++) {
      const substring = s.substring(i - j, j);
      if (isPalindrome(substring)) {
        min = Math.min(min, dp[i - j] + 1);
      }
    }
    return min;
  })();
*/
var minCut = function(s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = -1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (() => {
      let min = Infinity;
      for (let j = 1; j <= i; j++) {
        const substring = s.substring(i - j, i);
        if (isPalindrome(substring)) {
          min = Math.min(min, dp[i - j] + 1);
        }
      }
      return min;
    })();
  }
  return dp[n];
};

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}
