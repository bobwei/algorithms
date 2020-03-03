/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const costs = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
  costs[0][0] = 0;
  const pq = new PriorityQueue({
    comparator: ([i1, j1], [i2, j2]) => costs[i1][j1] <= costs[i2][j2],
  });
  pq.enqueue([0, 0]);
  const dirs = [
    [-1, 0, 4],
    [0, 1, 1],
    [1, 0, 3],
    [0, -1, 2],
  ];
  while (pq.length) {
    const [x, y] = pq.dequeue();
    for (const [di, dj, dir] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(m, n, i, j)) {
        const cost = costs[x][y] + (grid[x][y] === dir ? 0 : 1);
        if (cost < costs[i][j]) {
          costs[i][j] = cost;
          pq.enqueue([i, j]);
        }
      }
    }
  }
  return costs[m - 1][n - 1];
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    const index = binarySearch(this.arr, val, this.comparator);
    this.arr.splice(index, 0, val);
  }

  dequeue() {
    return this.arr.shift();
  }

  get length() {
    return this.arr.length;
  }
}

function binarySearch(arr, target, comparator) {
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
