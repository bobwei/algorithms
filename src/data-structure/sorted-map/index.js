import { lowerBound } from '../../algo/binary-search/v2';

class SortedMap {
  constructor({ comparator = defaultComparator } = {}) {
    this.map = {};
    this.arr = [];
    this.comparator = comparator;
  }

  get(key) {
    if (!(key in this.map)) {
      return null;
    }
    return this.map[key];
  }

  set(key, value) {
    if (!(key in this.map)) {
      const i = lowerBound(this.arr, key, this.comparator);
      this.arr.splice(i, 0, key);
    }
    this.map[key] = value;
  }

  has(key) {
    return key in this.map;
  }

  delete(key) {
    if (!(key in this.map)) {
      return;
    }
    const i = lowerBound(this.arr, this.map[key], this.comparator);
    this.arr.splice(i, 1);
    delete this.map[key];
  }

  keys() {
    return this.arr.slice();
  }
}

export default SortedMap;

function defaultComparator(a, b) {
  return a < b ? -1 : 1;
}
