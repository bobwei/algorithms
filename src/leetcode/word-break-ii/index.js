/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(null).map(() => []);
  dp[0].push('');
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j];
      if (s.substring(i - word.length, i) === word && dp[i - word.length].length > 0) {
        dp[i].push(j);
      }
    }
  }
  return helper(dp, wordDict, s.length);
};

function helper(dp, wordDict, length, stack = [], output = []) {
  if (length <= 0) {
    // prettier-ignore
    output.push(stack.slice().reverse().join(' '));
    return output;
  }
  for (const i of dp[length]) {
    const w = wordDict[i];
    stack.push(w);
    helper(dp, wordDict, length - w.length, stack, output);
    stack.pop();
  }
  return output;
}
