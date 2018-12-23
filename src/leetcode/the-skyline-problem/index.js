/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

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
    swap(arr, next, i);
    moveDown(arr, next, comparator);
  }
};

class PriorityQueue {
  constructor({ comparator, isEqual = (a, b) => a === b }) {
    this.comparator = comparator;
    this.isEqual = isEqual;
    this.arr = [];
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {}

  remove(element) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.isEqual(element, this.arr[i])) {
        swap(this.arr, i, this.arr.length - 1);
        this.arr.pop();
        moveDown(this.arr, i, this.comparator);
        return;
      }
    }
  }

  peek() {
    return this.arr[0];
  }
}

var getSkyline = function(buildings) {
  const points = [];
  for (let i = 0; i < buildings.length; i++) {
    const [x1, x2, y] = buildings[i];
    points.push([x1, y], [x2, -y]);
  }
  points.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  const pq = new PriorityQueue({
    comparator: (a, b) => a > b,
  });
  const output = [];
  let preHeight = 0;
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    if (y > 0) {
      pq.enqueue(y);
    } else {
      pq.remove(Math.abs(y));
    }
    const curHeight = pq.peek() || 0;
    if (curHeight !== preHeight) {
      output.push([x, curHeight]);
    }
    preHeight = curHeight;
  }
  return output;
};
