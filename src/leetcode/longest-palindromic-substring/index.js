/**
 * @param {string} s
 * @return {string}
 */

/*
  babab
  dp[i][j] means if s.slice(i, j + 1) is palindromic
  dp[i][j] = dp[i + 1][j - 1] && (s[i] === s[j]) ? true : false
  abbba => a + bbb + a isPalindromic if (bbb isPalindromic && a === a)
*/

const longestPalindrome = function(s) {
  let max = { index: 0, length: 1 };
  const dp = [...new Array(s.length)].map(() =>
    new Array(s.length).fill(false),
  );
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let i = 0; i <= s.length - 2; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1]) {
      max = {
        length: 2,
        index: i,
      };
    }
  }
  for (let n = 3; n <= s.length; n++) {
    for (let i = 0; i <= s.length - n; i++) {
      dp[i][i + n - 1] = dp[i + 1][i + n - 2] && s[i] === s[i + n - 1];
      if (dp[i][i + n - 1]) {
        if (n >= max.length) {
          max = {
            length: n,
            index: i,
          };
        }
      }
    }
  }
  const { index, length } = max;
  return s.slice(index, index + length);
};

export default longestPalindrome;
