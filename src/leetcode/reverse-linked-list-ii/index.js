/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
/*
   p1          p2
d->1->2->3->4->5->NULL
*/
var reverseBetween = function(head, m, n) {
  const dummy = new ListNode();
  dummy.next = head;
  const [p1, p2] = getPtrs(dummy, m, n);
  const [h, t] = reverse(p1.next, n - m + 1);
  p1.next = h;
  t.next = p2;
  return dummy.next;
};

function getPtrs(head, m, n) {
  let p1 = head;
  for (let i = 0; i < m - 1; i++) {
    p1 = p1.next;
  }
  let p2 = head;
  for (let i = 0; i <= n; i++) {
    p2 = p2.next;
  }
  return [p1, p2];
}

function reverse(head, nTimes) {
  let pre = null;
  let ptr = head;
  let next;
  for (let i = 0; i < nTimes; i++) {
    next = ptr.next;
    ptr.next = pre;
    pre = ptr;
    ptr = next;
  }
  return [pre, head];
}
