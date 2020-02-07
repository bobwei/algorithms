/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const m = s.length;
  const dp = new Array(m + 1).fill(null).map(() => []);
  for (let i = 1; i <= m; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j];
      const isBreakable = s.substring(i - word.length, i) === word;
      const pre = i - word.length <= 0 || dp[i - word.length].length > 0;
      if (isBreakable && pre) {
        dp[i].push([i - word.length, j]);
      }
    }
  }
  return dfs(dp, s, wordDict);
};

function dfs(dp, s, wordDict, index = dp.length - 1, selected = [], output = [], length = 0) {
  if (length >= s.length) {
    // prettier-ignore
    output.push([...selected].reverse().map(j => wordDict[j]).join(' '));
    return output;
  }
  for (const [i, j] of dp[index]) {
    selected.push(j);
    dfs(dp, s, wordDict, i, selected, output, length + wordDict[j].length);
    selected.pop();
  }
  return output;
}
