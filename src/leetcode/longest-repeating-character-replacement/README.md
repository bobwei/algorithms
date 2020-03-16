# README

## Algorithm

```js
const window = 'AAABC';
```

If a sliding window with `total length` = 5 and `max freq` = 3, then number of required operations to transform to repeating string is `total length - max freq`.

So we can use a sliding window to keep tracking total length in sliding window and maximum frequency.
