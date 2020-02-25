/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const freq = createFreq(S);
  const pq = new PriorityQueue({
    comparator: (a, b) => freq[a] >= freq[b],
  });
  for (const c in freq) {
    pq.enqueue(c);
  }
  let output = '';
  while (pq.length) {
    const next = [];
    for (let i = 0; i < 2 && pq.length; i++) {
      const c = pq.dequeue();
      if (c === output[output.length - 1]) {
        return '';
      }
      output += c;
      freq[c] -= 1;
      if (freq[c] > 0) {
        next.push(c);
      }
    }
    for (const c of next) {
      pq.enqueue(c);
    }
  }
  return output;
};

function createFreq(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}

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
