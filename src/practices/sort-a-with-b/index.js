function sortAWithB(A, B) {
  const m = A.length;
  for (let i = 0; i < m; i++) {
    while (B[i] - 1 !== i) {
      const pos = B[i] - 1;
      [B[i], B[pos]] = [B[pos], B[i]];
      [A[i], A[pos]] = [A[pos], A[i]];
    }
  }
}

const A = [24, 56, 74, -23, 87, 91];
const B = [2, 3, 4, 1, 5, 6];
sortAWithB(A, B);
console.log(A, B);
