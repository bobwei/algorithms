const createSampler = ({ k }) => {
  const arr = [];
  let i = 0;
  return {
    sample: (element) => {
      if (i < k) {
        arr.push(element);
      } else {
        const r = Math.floor(Math.random() * (i + 1));
        if (r < k) {
          arr[r] = element;
        }
      }
      i += 1;
    },
    getData: () => {
      return arr;
    },
  };
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  const { sample, getData } = createSampler({ k: 1 });
  let ptr = this.head;
  while (ptr) {
    sample(ptr);
    ptr = ptr.next;
  }
  return getData()[0].val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
