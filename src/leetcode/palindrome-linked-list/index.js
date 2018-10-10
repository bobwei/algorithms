/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const getLength = (head) => {
  if (!head) {
    return 0;
  }
  return 1 + getLength(head.next);
};

const reverse = (head) => {
  if (!head || !head.next) {
    return head;
  }
  const newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  const length = getLength(head);
  const mid = Math.floor((0 + length - 1) / 2);
  let ptr = head;
  for (let i = 0; i < mid; i++) {
    ptr = ptr.next;
  }
  let rhead = reverse(ptr.next);
  ptr.next = null;
  ptr = head;
  while (ptr && rhead) {
    if (ptr.val !== rhead.val) {
      return false;
    }
    ptr = ptr.next;
    rhead = rhead.next;
  }
  return true;
};
