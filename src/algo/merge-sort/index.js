const sort = (arr, start = 0, end = arr.length, comparator = (a, b) => a - b) => {
  if (end - start <= 1) {
    return arr.slice(start, end);
  }
  const mid = Math.floor((start + end) / 2);
  const left = sort(arr, start, mid);
  const right = sort(arr, mid, end);
  const output = [];
  while (left.length && right.length) {
    if (comparator(left[0], right[0]) <= 0) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }
  output.push(...left);
  output.push(...right);
  return output;
};

export default sort;
