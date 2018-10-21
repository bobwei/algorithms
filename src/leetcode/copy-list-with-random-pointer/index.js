/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  const cache = {};
  const randomPtrs = [];
  const dummy = new RandomListNode();
  let ptr = dummy;
  let hptr = head;
  while (hptr) {
    if (hptr.random) {
      randomPtrs.push([hptr.label, hptr.random.label]);
    }
    ptr.next = new RandomListNode(hptr.label);
    ptr = ptr.next;
    cache[ptr.label] = ptr;
    hptr = hptr.next;
  }
  for (let i = 0; i < randomPtrs.length; i++) {
    const [from, to] = randomPtrs[i];
    cache[from].random = cache[to];
  }
  return dummy.next;
};
