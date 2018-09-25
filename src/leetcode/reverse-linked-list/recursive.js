/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  const head2 = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return head2;
};
