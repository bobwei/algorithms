/* global ListNode */
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
var addTwoNumbers = function(l1, l2, carry = 0) {
  if (!l1 && !l2) {
    if (carry > 0) {
      return new ListNode(carry);
    }
    return null;
  }
  const ptr = l1 || l2;
  const sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;
  const nextCarry = Math.floor(sum / 10);
  ptr.val = sum % 10;
  ptr.next = addTwoNumbers(l1 && l1.next, l2 && l2.next, nextCarry);
  return ptr;
};
