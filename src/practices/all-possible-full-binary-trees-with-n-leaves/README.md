# README

## Question

https://leetcode.com/discuss/interview-question/414082/Google-or-Full-Binary-Trees-With-N-Leaves

## Algorithm

```js
4 = 1 + 3
  = 2 + 2
  = 3 + 1
```

```js
dp[i] = dp[j] + dp[i - j]; // j from 1 to i - 1
```

Get left children and right children from dp array. Then construct new tree and store in dp[i].

```js
const lefts = dp[j].map(clone);
const rights = dp[i - j].map(clone);
for (const left of lefts) {
  for (const right of rights) {
    const root = new TreeNode(0);
    root.left = left;
    root.right = right;
    dp[i].push(root);
  }
}
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  const dp = [...new Array(N + 1)].map(() => []);
  dp[1].push(new TreeNode(0));
  for (let i = 2; i <= N; i++) {
    for (let j = 1; j <= i - 1; j++) {
      const lefts = dp[j].map(clone);
      const rights = dp[i - j].map(clone);
      for (const left of lefts) {
        for (const right of rights) {
          const root = new TreeNode(0);
          root.left = left;
          root.right = right;
          dp[i].push(root);
        }
      }
    }
  }
  return dp[N];
};

function clone(root) {
  if (!root) {
    return null;
  }
  const cloned = new TreeNode(0);
  cloned.left = clone(root.left);
  cloned.right = clone(root.right);
  return cloned;
}
```
