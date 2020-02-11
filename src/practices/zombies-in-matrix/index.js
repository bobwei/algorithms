function minHours(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return Infinity;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let nInfected = queue.length;
  let nHours = 0;
  while (queue.length) {
    if (nInfected === m * n) {
      return nHours;
    }
    const next = [];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [di, dj] of dirs) {
        const i = x + di;
        const j = y + dj;
        if (isValid(m, n, i, j) && matrix[i][j] === 0) {
          matrix[i][j] = 1;
          nInfected += 1;
          next.push([i, j]);
        }
      }
    }
    nHours += 1;
    queue = next;
  }
  return Infinity;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

(() => {
  const data = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ];
  console.log(minHours(data));
})();

(() => {
  const data = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1],
  ];
  console.log(minHours(data));
})();
