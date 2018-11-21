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

const merge = (h1, h2) => {
  const dummy = new ListNode();
  let ptr = dummy;
  let p1 = h1;
  let p2 = h2;
  while (p1 || p2) {
    if (!p1 || !p2) {
      ptr.next = p1 || p2;
      return dummy.next;
    } else if (p1.val <= p2.val) {
      ptr.next = p1;
      ptr = ptr.next;
      p1 = p1.next;
    } else if (p2.val <= p1.val) {
      ptr.next = p2;
      ptr = ptr.next;
      p2 = p2.next;
    }
  }
  return dummy.next;
};

var mergeKLists = function(lists, start = 0, end = lists.length - 1) {
  if (!lists.length) {
    return null;
  }
  if (end - start + 1 <= 1) {
    return lists[start];
  }
  if (end - start + 1 <= 2) {
    return merge(lists[start], lists[end]);
  }
  const mid = Math.floor((start + end) / 2);
  return merge(mergeKLists(lists, start, mid), mergeKLists(lists, mid + 1, end));
};
