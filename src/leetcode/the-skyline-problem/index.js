/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

const moveUp = (arr, i, comparator) => {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
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
    const arr = this.arr;
    arr.push(element);
    moveUp(arr, arr.length - 1, this.comparator);
  }

  delete(element) {
    const arr = this.arr;
    const index = arr.indexOf(element);
    [arr[index], arr[arr.length - 1]] = [arr[arr.length - 1], arr[index]];
    arr.pop();
    moveDown(arr, index, this.comparator);
  }

  peek() {
    return this.arr[0];
  }
}

var getSkyline = function(buildings) {
  const arr = [];
  for (let i = 0; i < buildings.length; i++) {
    const [left, right, height] = buildings[i];
    arr.push([left, height], [right, -height]);
  }
  arr.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));

  const output = [];
  const pq = new PriorityQueue({
    comparator: (a, b) => a >= b,
  });
  let height = 0;
  for (let i = 0; i < arr.length; i++) {
    const [p, h] = arr[i];
    if (h > 0) {
      pq.enqueue(h);
    } else if (h < 0) {
      pq.delete(-h);
    }
    if (pq.peek() !== height) {
      height = pq.peek() || 0;
      output.push([p, height]);
    }
  }
  return output;
};
