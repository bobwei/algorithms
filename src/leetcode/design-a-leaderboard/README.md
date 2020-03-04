# README

## Algorithm

Maintain two data structures, `map` and `arr`.

`map` is used to keep tracking each player's score.

```js
const map = {
  player1: 100,
  player2: 90,
  player3: 100,
};
```

`arr` is a sorted arr to keep tracking top k items. Because it's top k player's score, it may contain duplicated scores.

```js
const arr = [100, 100, 90];
```

When adding score, we use binary search to find insertion position to keep it sorted.
