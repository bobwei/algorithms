/**
 * @param {number[][]} heightMap
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
  constructor({ comparator }) {
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

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const bfs = (element, m, n, pq, selected, heightMap) => {
  for (let d = 0; d < directions.length; d++) {
    const i = element.i + directions[d][0];
    const j = element.j + directions[d][1];
    if (i < 0 || i >= m || j < 0 || j >= n) {
      continue;
    }
    if (selected[i][j]) {
      continue;
    }
    pq.enqueue({ i, j, height: heightMap[i][j] });
    selected[i][j] = true;
  }
};

var trapRainWater = function(heightMap) {
  if (
    !heightMap.length ||
    !heightMap[0].length ||
    heightMap.length <= 2 ||
    heightMap[0].length <= 2
  ) {
    return 0;
  }
  const m = heightMap.length;
  const n = heightMap[0].length;
  const selected = [...new Array(m)].map(() => new Array(n).fill(false));
  const pq = new PriorityQueue({
    comparator: (a, b) => a.height < b.height,
  });
  /* put four sides into pq */
  for (let i = 0; i < m; i += m - 1) {
    for (let j = 0; j < n; j++) {
      pq.enqueue({ i, j, height: heightMap[i][j] });
      selected[i][j] = true;
    }
  }
  for (let i = 1; i < m - 1; i++) {
    for (let j = 0; j < n; j += n - 1) {
      pq.enqueue({ i, j, height: heightMap[i][j] });
      selected[i][j] = true;
    }
  }
  let output = 0;
  let maxHeight = 0;
  while (pq.arr.length) {
    const element = pq.dequeue();
    if (element.height < maxHeight) {
      output += maxHeight - element.height;
    }
    maxHeight = Math.max(maxHeight, element.height);
    /* bfs to explore surrounding */
    bfs(element, m, n, pq, selected, heightMap);
  }
  return output;
};
