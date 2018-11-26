/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const getLastHead = (head, k) => {
  let lHead;
  let ptr = head;
  let i = 0;
  while (ptr) {
    if (i % k === 0) {
      lHead = ptr;
    } else if (i % k === k - 1) {
      lHead = null;
    }
    ptr = ptr.next;
    i += 1;
  }
  return lHead;
};

var reverseKGroup = function(head, k) {
  if (k <= 1) {
    return head;
  }
  const lHead = getLastHead(head, k);
  const dummy = new ListNode();
  dummy.next = head;
  let kEnd = dummy;
  let kStart;
  let pre;
  let ptr = head;
  let next;
  let i = 0;
  while (ptr) {
    if (ptr === lHead) {
      break;
    }
    if (i % k === 0) {
      kStart = ptr;
      next = ptr.next;
      ptr.next = null;
      pre = ptr;
      ptr = next;
    } else if (i % k === k - 1) {
      kEnd.next = ptr;
      kEnd = kStart;
      next = ptr.next;
      ptr.next = pre;
      pre = ptr;
      ptr = next;
    } else {
      next = ptr.next;
      ptr.next = pre;
      pre = ptr;
      ptr = next;
    }
    i += 1;
  }
  if (kStart) {
    kStart.next = lHead;
  }
  return dummy.next;
};
