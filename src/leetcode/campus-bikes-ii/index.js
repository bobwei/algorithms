/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  const visited = new Visited();
  return createHelper()(workers, bikes, 0, 0, visited);
};

function createHelper() {
  let globalMin = Infinity;
  const helper = memorize((workers, bikes, i, dist, visited) => {
    if (dist > globalMin) {
      return dist;
    }
    if (i >= workers.length) {
      globalMin = Math.min(globalMin, dist);
      return dist;
    }
    let min = Infinity;
    for (let j = 0; j < bikes.length; j++) {
      if (!visited.has(j)) {
        visited.set(j);
        const d = helper(workers, bikes, i + 1, dist + getDist(workers[i], bikes[j]), visited);
        min = Math.min(min, d);
        visited.unset(j);
      }
    }
    return min;
  });
  return helper;
}

function getDist([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function memorize(fn, getKey = createKey) {
  const map = {};
  return (...args) => {
    const key = getKey(...args);
    if (key in map) {
      return map[key];
    }
    map[key] = fn(...args);
    return map[key];
  };
}

function createKey(workers, bikes, i, dist, visited) {
  return i + ':' + dist + ':' + visited;
}

class Visited {
  constructor() {
    this.n = 0;
  }

  has(key) {
    return ((this.n >> key) & 1) === 1;
  }

  set(key) {
    const mask = 2 ** key;
    this.n = this.n | mask;
  }

  unset(key) {
    const mask = -1 ^ (2 ** key);
    this.n = this.n & mask;
  }

  toString() {
    return this.n + '';
  }
}
