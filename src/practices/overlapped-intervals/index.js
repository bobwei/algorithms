const toArr = (intervals) => {
  const output = [];
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    output.push([start, 1], [end, -1]);
  }
  return output;
};

const fn = (intervals1, intervals2) => {
  const arr = [...toArr(intervals1), ...toArr(intervals2)];
  arr.sort((a, b) => a[0] - b[0]);
  const output = [];
  let interval;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (j < 2 && j + arr[i][1] >= 2) {
      interval = [arr[i][0]];
    } else if (j >= 2 && j + arr[i][1] < 2) {
      interval.push(arr[i][0]);
      output.push(interval);
    }
    j += arr[i][1];
  }
  return output;
};

export default fn;
