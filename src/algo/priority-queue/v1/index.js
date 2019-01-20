/* eslint-disable class-methods-use-this */
import defaultComparator from './defaultComparator';
import bubbleUp from './bubbleUp';
import bubbleDown from './bubbleDown';
import swap from './swap';

const PriorityQueue = class {
  constructor({ comparator = defaultComparator } = {}) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(priority, value) {
    this.arr.push({ priority, value });
    bubbleUp(this.arr, this.arr.length - 1, this.comparator);
    return this;
  }

  dequeue() {
    const output = this.arr[0];
    swap(this.arr, 0, this.arr.length - 1);
    this.arr.pop();
    bubbleDown(this.arr, 0, this.comparator);
    return output && output.value;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        return {
          done: !this.arr.length,
          value: this.dequeue(),
        };
      },
    };
  }
};

export default PriorityQueue;
