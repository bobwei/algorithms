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

const getLength = (head) => {
  if (!head) {
    return 0;
  }
  let n = 0;
  let ptr = head;
  while (ptr) {
    n += 1;
    ptr = ptr.next;
  }
  return n;
};

var reverseKGroup = function(head, k) {
  const length = getLength(head);
  if (length < k) {
    return head;
  }
  const dummy = new ListNode();
  let thePtr = dummy;
  let pre;
  let ptr = head;
  let next;
  for (let i = 0; i < Math.floor(length / k); i++) {
    let kHead;
    let kTail = ptr;
    pre = null;
    for (let j = 0; j < k; j++) {
      next = ptr.next;
      ptr.next = pre;
      pre = ptr;
      ptr = next;
    }
    kHead = pre;
    thePtr.next = kHead;
    thePtr = kTail;
  }
  thePtr.next = next;
  return dummy.next;
};
