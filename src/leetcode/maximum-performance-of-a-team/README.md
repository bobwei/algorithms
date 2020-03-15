# README

## Algorithm

```js
const speed = [2, 10, 3, 1, 5, 8];
const efficiency = [5, 4, 3, 9, 7, 2];
// prettier-ignore
const arr = [[1, 9 ], [ 5, 7 ], [ 2, 5 ], [ 10, 4 ], [ 3, 3 ], [ 8, 2 ] ];
```

Create an array by zipping speed and efficiency and sort by efficiency desc.

Iterate over arr, for each index, maintain the top k speed elements. By doing so, we are able to keep greatest speed for each visited efficiency. That is, we calculate maximum values for each possible efficiencies.
