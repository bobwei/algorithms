const Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

export const insert = (root, val) => {
  if (!root) {
    return new Node(val);
  }
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }
  return root;
};

export const inOrder = (root, output = []) => {
  if (!root) {
    return output;
  }
  inOrder(root.left, output);
  output.push(root.val);
  inOrder(root.right, output);
  return output;
};

export const getSuccessor = (root) => {
  let ptr = root.right;
  while (ptr.left) {
    ptr = ptr.left;
  }
  return ptr;
};

export const remove = (root, val) => {
  if (!root) {
    return root;
  }
  if (root.val === val) {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left && !root.right) {
      return root.left || root.right;
    } else {
      const successor = getSuccessor(root);
      root.val = successor.val;
      root.right = remove(root.right, successor.val);
    }
  } else if (val < root.val) {
    root.left = remove(root.left, val);
  } else if (val > root.val) {
    root.right = remove(root.right, val);
  }
  return root;
};

const createBST = () => {
  let root = null;
  return {
    insert(val) {
      root = insert(root, val);
      return this;
    },
    inOrder() {
      return inOrder(root);
    },
    remove(val) {
      root = remove(root, val);
      return this;
    },
  };
};

export default createBST;
