/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const times = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
  times[0][0] = grid[0][0];
  const pq = new PriorityQueue({
    comparator: (a, b) => times[a[0]][a[1]] <= times[b[0]][b[1]],
  });
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  pq.enqueue([0, 0]);
  while (pq.length) {
    const [x, y] = pq.dequeue();
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(m, n, i, j)) {
        const t = Math.max(times[x][y], grid[i][j]);
        if (t < times[i][j]) {
          times[i][j] = t;
          pq.enqueue([i, j]);
        }
      }
    }
  }
  return times[m - 1][n - 1];
};

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    const index = lowerBound(this.arr, (mid) => this.comparator(val, mid));
    this.arr.splice(index, 0, val);
  }

  dequeue() {
    return this.arr.shift();
  }

  get length() {
    return this.arr.length;
  }
}

function lowerBound(arr, comparator) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(arr[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
