## README

### Test Cases

```js
intervals1 = [[0, 3], [4, 6], [9, 12]];
intervals2 = [[1, 3], [5, 10], [11, 14]];
output = [[1, 3], [5, 6], [9, 10], [11, 12]];
```

### Algorithm

Transform intervals into timeline. For the interval.start, we add 1. For the interval.end, we substract 1.

ex.

```js
intervals = [[1, 3], [2, 4]];
output = [[1, 1], [2, 1], [3, -1], [4, -1]];
```

And then iterate over timeline.

For the point with sum changes from `< j` to `>= j`, it's the start of overlapped interval.

```js
if (j < 2 && j + arr[i][1] >= 2) {
  interval = [arr[i][0]];
}
```

For the point with sum changes from `>= j` to `< j`, it's the end of overlapped interval.

```js
if (j >= 2 && j + arr[i][1] < 2) {
  interval.push(arr[i][0]);
  output.push(interval);
}
```
