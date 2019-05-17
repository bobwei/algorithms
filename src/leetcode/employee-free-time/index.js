/**
 * @param {number[][][]} schedule
 * @return {number[][]}
 */
var employeeFreeTime = function(schedule) {
  if (!schedule.length) {
    return [];
  }
  const n = schedule.length;
  const maxEndTime = getMaxEndTime(schedule, n);
  const freeTimes = getFreeTimes(schedule, n, maxEndTime);
  return mergeAll(freeTimes);
};

function merge(interval1, interval2) {
  const output = [];
  let i = 0;
  let j = 0;
  while (i < interval1.length && j < interval2.length) {
    const interval = [
      Math.max(interval1[i][0], interval2[j][0]),
      Math.min(interval1[i][1], interval2[j][1]),
    ];
    if (isValidInterval(interval)) {
      output.push(interval);
    }
    if (interval1[i][1] <= interval2[j][1]) {
      i += 1;
    } else if (interval2[j][1] <= interval1[i][1]) {
      j += 1;
    }
  }
  return output;
}

function isValidInterval([start, end]) {
  if (end < start) {
    return false;
  }
  return true;
}

function isValidOutput([start, end]) {
  return start > -Infinity && end - start > 0;
}

function mergeAll(freeTimes) {
  while (freeTimes.length > 1) {
    const result = merge(freeTimes.shift(), freeTimes.shift());
    freeTimes.push(result);
  }
  return freeTimes.pop().filter(isValidOutput);
}

function getFreeTimes(schedule, n, maxEndTime) {
  const freeTimes = [...new Array(n)].map(() => []);
  for (let i = 0; i < n; i++) {
    const m = schedule[i].length;
    if (m && schedule[i][0][0] > 0) {
      freeTimes[i].push([-Infinity, schedule[i][0][0]]);
    }
    for (let j = 1; j < m; j++) {
      freeTimes[i].push([schedule[i][j - 1][1], schedule[i][j][0]]);
    }
    if (m && schedule[i][m - 1][1] < maxEndTime) {
      freeTimes[i].push([schedule[i][m - 1][1], maxEndTime]);
    }
  }
  return freeTimes;
}

function getMaxEndTime(schedule, n) {
  let max = 0;
  for (const employee of schedule) {
    for (const [, end] of employee) {
      max = Math.max(max, end);
    }
  }
  return max;
}
