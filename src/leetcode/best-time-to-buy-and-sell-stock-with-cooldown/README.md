# README

## Algorithm

For each day, we need to maintain two states. With stock and without stock. So we define:

`wtStock[i]`: Maximum value at ith day with stock in hand.
`woStock[i]`: Maximum value at ith day without stock in hand.

So we have following relationships.

```js
woStock[i] = Math.max(woStock[i - 1], wtStock[i - 1] + prices[i]);
wtStock[i] = Math.max(wtStock[i - 1], woStock[i - 2] - prices[i]);
```

`woStock[i] = Math.max(woStock[i - 1], wtStock[i - 1] + prices[i]);`

2 possibilities without stock at ith day:

- Do nothing in previous day
- With stock at i - 1 day and sell at ith day

`wtStock[i] = Math.max(wtStock[i - 1], woStock[i - 2] - prices[i]);`

2 possibilities with stock at ith day:

- Do nothing in previous day
- Without stock at i - 2 day and buy at ith day

So we can fill up dp day by day.

This takes O(n) in space.

In fact, we don't need that much space. For each array, it takes at most length of 3. So we can either use 6 variables (3 for each array) or limit the length of each array to at most 3.

So we can reduce to contant space.
