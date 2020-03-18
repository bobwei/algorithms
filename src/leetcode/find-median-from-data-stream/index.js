/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.maxQueue = new PriorityQueue({
    comparator: (a, b) => a >= b,
  });
  this.minQueue = new PriorityQueue({
    comparator: (a, b) => a <= b,
  });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const shouldGoMaxQueue =
    num <= this.maxQueue.peekOr(-Infinity) ||
    (num >= this.maxQueue.peekOr(-Infinity) && num < this.minQueue.peekOr(Infinity));
  if (shouldGoMaxQueue) {
    this.maxQueue.enqueue(num);
  } else {
    this.minQueue.enqueue(num);
  }
  if (!(this.maxQueue.length - this.minQueue.length >= 0)) {
    this.maxQueue.enqueue(this.minQueue.dequeue());
  } else if (this.maxQueue.length - this.minQueue.length >= 2) {
    this.minQueue.enqueue(this.maxQueue.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const isOdd = (this.maxQueue.length + this.minQueue.length) % 2 === 1;
  if (isOdd) {
    return this.maxQueue.peekOr();
  }
  return (this.maxQueue.peekOr() + this.minQueue.peekOr()) / 2;
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    this.arr.push(val);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  peekOr(defaultValue) {
    return this.arr.length ? this.arr[0] : defaultValue;
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

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
