# README

## Algorithm

First of all, model the problem as a graph. So create a graph with each node point to its parent.

```js
const graph = {
  'North America': 'Earch',
  'South America': 'Earch',
  // ...so on
};
```

Then we find lowest common ancestor of r1 and r2.

1. Start from r1 or r2 and record the path.
2. Start from r2 or r1. If intersection is found, it is the common ancestor.
