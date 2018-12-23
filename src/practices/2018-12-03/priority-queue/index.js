const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const moveUp = (arr, i, comparator) => {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    swap(arr, i, p);
    moveUp(arr, p, comparator);
  }
};

const moveDown = (arr, i, comparator) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    swap(arr, i, next);
    moveDown(arr, next, comparator);
  }
};

class PriorityQueue {
  constructor({ comparator = (a, b) => a < b, isEqual } = {}) {
    this.arr = [];
    this.comparator = comparator;
    this.isEqual = isEqual;
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
    return this;
  }

  dequeue() {
    if (!this.arr.length) {
      return;
    }
    const element = this.arr.shift();
    if (this.arr.length) {
      this.arr.unshift(this.arr.pop());
      moveDown(this.arr, 0, this.comparator);
    }
    return element;
  }

  remove(element) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.isEqual(element, this.arr[i])) {
        swap(this.arr, i, this.arr.length - 1);
        this.arr.pop();
        moveDown(this.arr, i, this.comparator);
      }
    }
  }
}

export default PriorityQueue;
