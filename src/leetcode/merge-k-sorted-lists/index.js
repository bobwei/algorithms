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

var mergeKLists = function(lists) {
  if (!lists.length) {
    return null;
  }
  while (lists.length > 1) {
    const h1 = lists.shift();
    const h2 = lists.shift();
    lists.push(merge(h1, h2));
  }
  return lists.pop();
};
