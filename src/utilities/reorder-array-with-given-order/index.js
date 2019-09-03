function sort(arr, order) {
  for (let i = 0; i < order.length; ) {
    while (order[i] !== i) {
      const j = order[i];
      [order[i], order[j]] = [order[j], order[i]];
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    i += 1;
  }
  return arr;
}

export default sort;
