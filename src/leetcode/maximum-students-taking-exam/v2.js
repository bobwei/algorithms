/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
  const m = seats.length;
  const n = seats[0].length;
  let dp = {};
  for (const selection of createSelections(seats, m, n, 0)) {
    dp[selection.val] = selection.nSelected;
  }
  let max = 0;
  for (let i = 1; i < m; i++) {
    const next = {};
    for (const selection1 of createSelections(seats, m, n, i)) {
      next[selection1.val] = 0;
      for (const selection2 of createSelections(seats, m, n, i - 1)) {
        if (isValid(n, selection1, selection2)) {
          next[selection1.val] = Math.max(
            next[selection1.val],
            selection1.nSelected + dp[selection2.val],
          );
        }
      }
      max = Math.max(max, next[selection1.val]);
    }
    dp = next;
  }
  return max;
};

function isValid(n, selection1, selection2) {
  for (let j = 0; j < n; j++) {
    if (selection2.has(j) && (selection1.has(j - 1) || selection1.has(j + 1))) {
      return false;
    }
  }
  return true;
}

function createSelections(seats, m, n, i, index = 0, selection = new Selection(), output = []) {
  output.push(selection.clone());
  if (index >= n) {
    return output;
  }
  for (let j = index; j < n; j++) {
    const isAvailable =
      seats[i][j] === '.' &&
      (j - 1 < 0 || !selection.has(j - 1)) &&
      (j + 1 >= m || !selection.has(j + 1));
    if (isAvailable) {
      selection.add(j);
      createSelections(seats, m, n, i, j + 1, selection, output);
      selection.delete(j);
    }
  }
  return output;
}

class Selection {
  constructor(val = 0) {
    this.val = val;
  }

  add(i) {
    const mask = 2 ** i;
    this.val |= mask;
  }

  delete(i) {
    const mask = -1 ^ (2 ** i);
    this.val &= mask;
  }

  has(i) {
    return ((this.val >> i) & 1) === 1;
  }

  clone() {
    return new Selection(this.val);
  }

  get nSelected() {
    let num = this.val;
    let output = 0;
    while (num > 0) {
      output += num % 2;
      num >>= 1;
    }
    return output;
  }
}
