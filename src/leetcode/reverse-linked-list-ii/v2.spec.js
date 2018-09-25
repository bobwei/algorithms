import R from 'ramda';

import reverseBetween from './v2';

const Node = function(val) {
  this.val = val;
  this.next = null;
};

const toArray = (head) => {
  const output = [];
  let ptr = head;
  while (ptr) {
    output.push(ptr);
    ptr = ptr.next;
  }
  return output;
};

test('reverse-linked-list-ii', () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  const result = R.pipe(
    reverseBetween,
    toArray,
    R.map(R.prop('val')),
  )(head, 1, 5);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

test('reverse-linked-list-ii', () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  const result = R.pipe(
    reverseBetween,
    toArray,
    R.map(R.prop('val')),
  )(head, 2, 4);
  expect(result).toEqual([1, 4, 3, 2, 5]);
});

test('reverse-linked-list-ii', () => {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  const result = R.pipe(
    reverseBetween,
    toArray,
    R.map(R.prop('val')),
  )(head, 1, 1);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});
