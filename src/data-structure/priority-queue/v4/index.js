export default class PriorityQueue {
  constructor({ comparator, isEqual }) {
    this.arr = [];
    this.comparator = comparator;
    this.isEqual = isEqual;
  }

  enqueue(val) {
    const index = lowerBound(this.arr, (mid) => this.comparator(val, mid));
    this.arr.splice(index, 0, val);
  }

  dequeue() {
    return this.arr.shift();
  }

  delete(val) {
    const index = lowerBound(this.arr, (mid) => this.comparator(val, mid));
    if (this.isEqual(this.arr[index], val)) {
      this.arr.splice(index, 1);
    }
  }

  get length() {
    return this.arr.length;
  }
}

function lowerBound(arr, comparator) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
