/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const set = new Set(words);
  const output = [];
  for (let i = 0; i < words.length; i++) {
    if (isConcatenated(words, set, words[i])) {
      output.push(words[i]);
    }
  }
  return output;
};

function isConcatenated(words, set, target) {
  const dp = new Array(target.length).fill(-Infinity);
  for (let i = 0; i < target.length; i++) {
    for (let j = i; j >= 0; j--) {
      const pre = j - 1 >= 0 ? dp[j - 1] : 0;
      const substr = target.substring(j, i + 1);
      if (pre >= 0 && set.has(substr)) {
        dp[i] = pre + 1;
      }
      if (dp[i] > 0) {
        break;
      }
    }
  }
  return dp[target.length - 1] > 1;
}
