/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const win = new Window({ nums, k });
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    win.add(i);
    win.delete(i - k);
    win.balance();
    if (i >= k - 1) {
      output.push(win.getMedian());
    }
  }
  return output;
};

class Window {
  constructor({ nums, k }) {
    this.minHeap = new PriorityQueue({
      comparator: createComparator(nums, 'asc'),
    });
    this.maxHeap = new PriorityQueue({
      comparator: createComparator(nums, 'dsc'),
    });
    this.nums = nums;
    this.k = k;
  }

  add(i) {
    const { minHeap, maxHeap, nums } = this;
    const num = nums[i];
    const m = minHeap.length && maxHeap.length ? this.getMedian() : -Infinity;
    if (num >= m) {
      minHeap.enqueue(i);
    } else {
      maxHeap.enqueue(i);
    }
  }

  delete(i) {
    if (i < 0) {
      return;
    }
    const { minHeap, maxHeap } = this;
    minHeap.delete(i);
    maxHeap.delete(i);
  }

  balance() {
    const { minHeap, maxHeap } = this;
    if (minHeap.length - maxHeap.length > 1) {
      maxHeap.enqueue(minHeap.dequeue());
    } else if (maxHeap.length - minHeap.length > 1) {
      minHeap.enqueue(maxHeap.dequeue());
    }
  }

  getMedian() {
    const { minHeap, maxHeap, nums } = this;
    if ((minHeap.length + maxHeap.length) % 2 === 1) {
      return minHeap.length > maxHeap.length ? nums[minHeap.peek()] : nums[maxHeap.peek()];
    }
    return (nums[minHeap.peek()] + nums[maxHeap.peek()]) / 2;
  }
}

function createComparator(nums, order) {
  return (i, j) => {
    if (order === 'asc') {
      return nums[i] < nums[j];
    } else if (order === 'dsc') {
      return nums[i] > nums[j];
    }
  };
}

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

  delete(element) {
    const index = this.arr.indexOf(element);
    if (index >= 0) {
      this.arr[index] = this.arr[this.arr.length - 1];
      this.arr.pop();
      moveDown(this.arr, index, this.comparator);
    }
  }

  peek() {
    return this.arr[0];
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
