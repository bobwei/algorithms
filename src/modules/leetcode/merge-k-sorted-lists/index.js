/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const merge = (r1, r2) => {
  if (!r1 || !r2) {
    return r1 || r2;
  }
  let root;
  if (r1.val <= r2.val) {
    root = r1;
    r1 = r1.next;
  } else {
    root = r2;
    r2 = r2.next;
  }
  let ptr = root;
  while (r1 && r2) {
    if (r1.val <= r2.val) {
      ptr.next = r1;
      r1 = r1.next;
    } else {
      ptr.next = r2;
      r2 = r2.next;
    }
    ptr = ptr.next;
  }
  ptr.next = r1 || r2;
  return root;
};

var mergeKLists = function(lists) {
  let ptr = null;
  for (let i = 0; i < lists.length; i++) {
    ptr = merge(ptr, lists[i]);
  }
  return ptr;
};
