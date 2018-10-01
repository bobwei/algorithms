/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

/*
  s = "catsanddog"
  wordDict = ["cat", "cats", "and", "sand", "dog"]

  f(n) = {f(n) || f(n - wordDict[i].length)} for i in wordDict if isPostFix(wordDict[i])
*/

const isPostFix = (str, n, target) => {
  if (n < target.length) {
    return false;
  }
  return str.slice(n - target.length, n) === target;
};

const dfs = (s, wordDict, dp, graph, v, selected = [], output = []) => {
  if (selected.reduce((acc, cur) => acc + cur.length, 0) >= s.length) {
    output.push([...selected]);
    return output;
  }
  for (let i = 0; i < graph[v].length; i++) {
    const nextV = v - wordDict[graph[v][i]].length;
    if (!dp[nextV]) {
      continue;
    }
    selected.push(wordDict[graph[v][i]]);
    dfs(s, wordDict, dp, graph, nextV, selected, output);
    selected.pop();
  }
  return output;
};

const wordBreak = function(s, wordDict) {
  const graph = {};
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (isPostFix(s, i, wordDict[j])) {
        dp[i] = dp[i] || dp[i - wordDict[j].length];
        if (!graph[i]) {
          graph[i] = [];
        }
        graph[i].push(j);
      }
    }
  }
  if (!dp[s.length]) {
    return [];
  }
  const output = dfs(s, wordDict, dp, graph, s.length);
  return output.map((words) => words.reverse()).map((words) => words.join(' '));
};

export default wordBreak;
