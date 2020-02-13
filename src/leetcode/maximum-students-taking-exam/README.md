# README

## Algorithm

First we model the seats selection state using a binary number. For example,

If there are 4 seats.

```
1000 => first seat selected
0100 => second seat selection
1001 => first and 4th seat selected
```

Then we can have this relationship.

```js
dp[i][selection1] = Math.max(
  dp[i][selection1],
  (num of selected in selection1) + dp[i - 1][selection2]
)
```

`(num of selected in selection1) + dp[i - 1][selection2]` This means num of selected in selection1 + maximum value of previous row with certain selection.

So for every row, we create selections of current row and selections of previous row. If it's valid for selection1 and selection2, then we update maximum value for `dp[i][selection1]`.

Finally we fill up dp and find out maximum value.

There are several helper functions and classes.

`Selection` is a class encapsulating selection logic and bit mask operations.

```js
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
```

`createSelections` is a function that create combinations of all possible selections with a given row. For example, if we have this seat data, then we will have these selections as return.

```js
['.', '#', '.', '#'];
```

```
0000
1000
1010
0010
```

`isValid` is a function that returns if we can have these two selections at the same time.
