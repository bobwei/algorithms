class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let pre;
    let ptr = this.root;
    while (ptr) {
      pre = ptr;
      ptr = val < ptr.val ? ptr.left : ptr.right;
    }
    if (val < pre.val) {
      pre.left = new Node(val);
    } else {
      pre.right = new Node(val);
    }
    return this;
  }

  delete(val, root = this.root) {
    let pre;
    let ptr = root;
    while (ptr && ptr.val !== val) {
      pre = ptr;
      if (val < ptr.val) {
        ptr = ptr.left;
      } else {
        ptr = ptr.right;
      }
    }
    if (ptr.left && ptr.right) {
      const min = this.findMin(ptr.right);
      this.delete(min);
      ptr.val = min;
    } else if (ptr.left || ptr.right) {
      if (ptr.val < pre.val) {
        pre.left = ptr.left || ptr.right;
      } else {
        pre.right = ptr.left || ptr.right;
      }
    } else {
      if (ptr.val < pre.val) {
        pre.left = null;
      } else {
        pre.right = null;
      }
    }
    return this;
  }

  findMin(root = this.root) {
    let ptr = root;
    while (ptr && ptr.left) {
      ptr = ptr.left;
    }
    return ptr.val;
  }

  [Symbol.iterator]() {
    const stack = [];
    let ptr = this.root;
    while (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    }
    return {
      next() {
        if (!stack.length) {
          return {
            done: true,
          };
        }
        const node = stack.pop();
        ptr = node.right;
        while (ptr) {
          stack.push(ptr);
          ptr = ptr.left;
        }
        return {
          value: node.val,
          done: false,
        };
      },
    };
  }
}

export default BST;
