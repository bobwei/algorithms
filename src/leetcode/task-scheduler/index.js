/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

const moveUp = (arr, i, comparator) => {
  const p = Math.floor((i - 1) / 2);
  const isValid = i === 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[p], arr[i]] = [arr[i], arr[p]];
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
    [arr[i], arr[next]] = [arr[next], arr[i]];
    moveDown(arr, next, comparator);
  }
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
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

  get length() {
    return this.arr.length;
  }
}

var leastInterval = function(tasks, n) {
  const counts = {};
  for (let i = 0; i < tasks.length; i++) {
    counts[tasks[i]] = (counts[tasks[i]] || 0) + 1;
  }
  const pq = new PriorityQueue({
    comparator: (a, b) => counts[a] >= counts[b],
  });
  for (const t in counts) {
    pq.enqueue(t);
  }
  let output = 0;
  let i = 0;
  while (i < tasks.length) {
    const next = [];
    let j = 0;
    while (j <= n && i < tasks.length) {
      if (pq.length) {
        const t = pq.dequeue();
        counts[t] -= 1;
        if (counts[t] > 0) {
          next.push(t);
        }
        i += 1;
      }
      j += 1;
      output += 1;
    }
    next.forEach((t) => pq.enqueue(t));
  }
  return output;
};
