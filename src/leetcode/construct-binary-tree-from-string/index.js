/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s, start = 0, end = s.length - 1, parens = findParenthesis(s)) {
  if (!s) {
    return null;
  }
  let i = start;
  let num = 0;
  let sign = 1;
  while (i >= start && i <= end && /[0-9|+|-]/.test(s[i])) {
    if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '+') {
      sign = 1;
    } else {
      num = 10 * num + parseInt(s[i]);
    }
    i += 1;
  }
  const root = new TreeNode(sign * num);
  if (i >= start && i <= end) {
    root.left = str2tree(s, i + 1, parens[i] - 1, parens);
    i = parens[i] + 1;
  }
  if (i >= start && i <= end) {
    root.right = str2tree(s, i + 1, parens[i] - 1, parens);
  }
  return root;
};

function findParenthesis(s) {
  const stack = [];
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      map[stack.pop()] = i;
    }
  }
  return map;
}
