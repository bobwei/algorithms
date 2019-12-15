/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  const n = getLength(head);
  let sum = 0;
  let ptr = head;
  for (let i = n - 1; i >= 0; i--) {
    sum += 2 ** i * ptr.val;
    ptr = ptr.next;
  }
  return sum;
};

function getLength(head) {
  let n = 0;
  let ptr = head;
  while (ptr) {
    n += 1;
    ptr = ptr.next;
  }
  return n;
}
