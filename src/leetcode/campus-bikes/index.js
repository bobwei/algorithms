/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const n = workers.length;
  const m = bikes.length;
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      queue.push([i, j, dist(workers[i], bikes[j])]);
    }
  }
  queue.sort((a, b) => {
    if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  const output = new Array(workers.length).fill(-1);
  const visited = new Set();
  for (const [worker, bike] of queue) {
    if (!visited.has(bike) && output[worker] === -1) {
      output[worker] = bike;
      visited.add(bike);
    }
  }
  return output;
};

function dist([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
