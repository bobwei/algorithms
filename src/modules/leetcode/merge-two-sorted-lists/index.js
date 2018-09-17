/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let head;
  if (l1.val <= l2.val) {
    head = l1;
    head.next = mergeTwoLists(l1.next, l2);
  } else if (l1.val > l2.val) {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  }
  return head;
};

export default mergeTwoLists;
