const TreeNode = function() {};

const treeToDoublyList = (root) => {
  const stack = [];
  let ptr = root;
  const dummy = new TreeNode();
  let pre = dummy;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const cur = stack.pop();
      pre.right = cur;
      cur.left = pre;
      pre = cur;
      ptr = cur.right;
    }
  }
  pre.right = dummy.right;
  dummy.right.left = pre;
  return dummy.right;
};

export default treeToDoublyList;
