/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
  sticks.sort((a, b) => a - b);
  let total = 0;
  while (sticks.length > 1) {
    const sum = sticks.shift() + sticks.shift();
    const index = lowerBound(sticks, sum);
    sticks.splice(index, 0, sum);
    total += sum;
  }
  return total;
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
