/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

const getHalfPtr = (head) => {
  let pre = head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = (fast.next && fast.next.next) || null;
  }
  pre.next = null;
  return slow;
};

var sortedListToBST = function(head) {
  if (!head) {
    return head;
  }
  if (!head.next) {
    return new TreeNode(head.val);
  }
  let right = getHalfPtr(head);
  const root = new TreeNode(right.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(right.next);
  return root;
};
