export default class PriorityQueue {
  constructor({ comparator, isEqual }) {
    this.arr = [];
    this.comparator = comparator;
    this.isEqual = isEqual;
  }

  enqueue(val) {
    const index = binarySearch(this.arr, val);
    this.arr.splice(index, 0, val);
  }

  dequeue() {
    return this.arr.shift();
  }

  delete(val) {
    const index = binarySearch(this.arr, val);
    if (index < this.arr.length && this.isEqual(this.arr[index], val)) {
      this.arr.splice(index, 1);
    }
  }

  get length() {
    return this.arr.length;
  }
}

function binarySearch(arr, target, comparator = (a, b) => a <= b) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
