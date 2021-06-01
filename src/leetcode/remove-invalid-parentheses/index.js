/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const [left, right] = findInvalids(s);
  return [...dfs(s, 0, left, right)];
};

function dfs(s, i, nRmLeft, nRmRight, count = 0, str = '', output = new Set()) {
  if (i >= s.length || nRmLeft < 0 || nRmRight < 0 || count < 0) {
    if (i === s.length && nRmLeft === 0 && nRmRight === 0 && count === 0) {
      output.add(str);
    }
    return output;
  }
  if (s[i] === '(') {
    dfs(s, i + 1, nRmLeft, nRmRight, count + 1, str + s[i], output);
    dfs(s, i + 1, nRmLeft - 1, nRmRight, count, str, output);
  } else if (s[i] === ')') {
    dfs(s, i + 1, nRmLeft, nRmRight, count - 1, str + s[i], output);
    dfs(s, i + 1, nRmLeft, nRmRight - 1, count, str, output);
  } else {
    dfs(s, i + 1, nRmLeft, nRmRight, count, str + s[i], output);
  }
  return output;
}

function findInvalids(s) {
  let left = 0;
  let right = 0;
  for (const c of s) {
    if (c === '(') {
      left += 1;
    } else if (c === ')') {
      if (left > 0) {
        left -= 1;
      } else {
        right += 1;
      }
    }
  }
  return [left, right];
}
