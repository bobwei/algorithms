/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
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
    swap(arr, i, next);
    moveDown(arr, next, comparator);
  }
};

class PriorityQueue {
  constructor({ comparator } = {}) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(element) {
    this.arr.push(element);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
    return this;
  }

  dequeue() {
    if (this.arr.length <= 1) {
      return this.arr.pop();
    }
    const element = this.arr.shift();
    this.arr.unshift(this.arr.pop());
    moveDown(this.arr, 0, this.comparator);
    return element;
  }
}

var leastInterval = function(tasks, n) {
  const counts = {};
  for (let i = 0; i < tasks.length; i++) {
    counts[tasks[i]] = (counts[tasks[i]] || 0) + 1;
  }
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      return a.count !== b.count ? a.count > b.count : a.index < b.index;
    },
  });
  const keys = Object.keys(counts);
  for (let i = 0; i < keys.length; i++) {
    pq.enqueue({
      task: keys[i],
      index: i,
      count: counts[keys[i]],
    });
  }
  const output = [];
  while (pq.arr.length) {
    const nTimes = n + 1;
    const tmp = [];
    for (let i = 0; i < nTimes; i++) {
      const element = pq.dequeue();
      if (!element) {
        if (tmp.length > 0) {
          output.push('idle');
        }
        continue;
      }
      output.push(element.task);
      element.count -= 1;
      if (element.count > 0) {
        tmp.push(element);
      }
    }
    for (let i = 0; i < tmp.length; i++) {
      pq.enqueue(tmp[i]);
    }
  }
  return output.length;
};
