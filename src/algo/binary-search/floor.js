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

function floor(arr, target) {
  const index = lowerBound(arr, target);
  return arr[index] === target ? index : index - 1;
}

export default floor;
