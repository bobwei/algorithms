/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.arr = [];
  for (let i = 0; i < sentences.length; i++) {
    this.arr.push([sentences[i], times[i]]);
  }
  this.arr.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  this.text = '';
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
  if (c === '#') {
    const index = lowerBound(this.arr, this.text);
    if (index < this.arr.length && this.arr[index][0] === this.text) {
      this.arr[index][1] += 1;
    } else {
      this.arr.splice(index, 0, [this.text, 1]);
    }
    this.text = '';
    return [];
  }
  this.text += c;
  const pq = new PriorityQueue({
    comparator: (a, b) => {
      if (a[1] !== b[1]) {
        return a[1] <= b[1];
      }
      return a[0] >= b[0];
    },
  });
  const start = lowerBound(this.arr, this.text);
  for (let i = start; i < this.arr.length && this.arr[i][0].startsWith(this.text); i++) {
    pq.enqueue(this.arr[i]);
    if (pq.length > 3) {
      pq.dequeue();
    }
  }
  const output = [];
  while (pq.length) {
    output.push(pq.dequeue()[0]);
  }
  return output.reverse();
};

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator;
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
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
