function getDotProduct(v1, v2) {
  let i = 0;
  let j = 0;
  let sum = 0;
  while (i < v1.length && j < v1.length) {
    const [n1, t1] = v1[i];
    const [n2, t2] = v2[j];
    const times = Math.min(t1, t2);
    sum += n1 * n2 * times;
    if (t1 <= t2) {
      i += 1;
      v2[j][1] -= times;
    } else {
      j += 1;
      v1[i][1] -= times;
    }
  }
  return sum;
}

export default getDotProduct;
