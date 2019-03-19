/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const win = new Window();
  for (let i = 0; i < k; i++) {
    win.add(nums[i]);
  }

  const output = [win.findMedian()];
  for (let i = k; i < nums.length; i++) {
    win.add(nums[i]);
    win.delete(nums[i - k]);
    output.push(win.findMedian());
  }
  return output;
};

class Window {
  constructor() {
    this.minHeap = new PriorityQueue({
      comparator: (a, b) => a <= b,
      isEqual: (a, b) => a === b,
    });
    this.maxHeap = new PriorityQueue({
      comparator: (a, b) => a >= b,
      isEqual: (a, b) => a === b,
    });
  }

  add(element) {
    this.minHeap.enqueue(element);
    this.maxHeap.enqueue(this.minHeap.dequeue());
    if (!(this.minHeap.length >= this.maxHeap.length)) {
      this.minHeap.enqueue(this.maxHeap.dequeue());
    }
  }

  delete(element) {
    if (element > this.findMedian()) {
      this.minHeap.delete(element);
    } else {
      this.maxHeap.delete(element);
    }
    if (!(this.minHeap.length >= this.maxHeap.length)) {
      this.minHeap.enqueue(this.maxHeap.dequeue());
    } else if (this.minHeap.length - this.maxHeap.length > 1) {
      this.maxHeap.enqueue(this.minHeap.dequeue());
    }
  }

  findMedian() {
    if (this.minHeap.length > this.maxHeap.length) {
      return this.minHeap.peek();
    }
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  }
}

class PriorityQueue {
  constructor({ comparator, isEqual }) {
    this.comparator = comparator;
    this.isEqual = isEqual;
    this.arr = [];
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  delete(element) {
    const i = this.arr.findIndex((target) => this.isEqual(target, element));
    if (i >= 0) {
      this.arr[i] = this.arr[this.arr.length - 1];
      this.arr.pop();
      moveDown(this.arr, i, this.comparator);
    }
  }

  peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
}
