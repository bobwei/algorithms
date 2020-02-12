function optimalUtilization(a, b, target) {
  sort(a);
  sort(b);
  let output = [];
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = n - 1;
  let max = -Infinity;
  while (i < m && j >= 0) {
    const sum = a[i][1] + b[j][1];
    if (sum > target) {
      j -= 1;
    } else {
      if (sum > max) {
        max = sum;
        output = [];
      }
      if (sum >= max) {
        for (let k = j; k >= 0; k--) {
          if (b[k][1] === b[j][1]) {
            output.push([a[i][0], b[k][0]]);
          }
        }
      }
      i += 1;
    }
  }
  return output;
}

function sort(arr) {
  return arr.sort((a, b) => a[1] - b[1]);
}

(() => {
  const a = [
    [1, 2],
    [2, 4],
    [3, 6],
  ];
  const b = [[1, 2]];
  const target = 7;
  console.log(optimalUtilization(a, b, target));
})();

(() => {
  const a = [
    [1, 3],
    [2, 5],
    [3, 7],
    [4, 10],
  ];
  const b = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];
  const target = 10;
  console.log(optimalUtilization(a, b, target));
})();

(() => {
  const a = [
    [1, 8],
    [2, 7],
    [3, 14],
  ];
  const b = [
    [1, 5],
    [2, 10],
    [3, 14],
  ];
  const target = 20;
  console.log(optimalUtilization(a, b, target));
})();

(() => {
  const a = [
    [1, 8],
    [2, 15],
    [3, 9],
  ];
  const b = [
    [1, 8],
    [2, 11],
    [3, 12],
  ];
  const target = 20;
  console.log(optimalUtilization(a, b, target));
})();

(() => {
  const a = [
    [1, 2],
    [2, 2],
    [3, 2],
  ];
  const b = [
    [1, 2],
    [2, 2],
    [3, 2],
  ];
  const target = 4;
  console.log(optimalUtilization(a, b, target));
})();
