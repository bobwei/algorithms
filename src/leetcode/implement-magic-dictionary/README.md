# README

## Algorithm

For each of word in dict, we create keys. ex:

```js
const word = 'hello';
for (let i = 0; i < word.length; i++) {
  const key = createKey(word, i);
  console.log(key);
}
// *ello, h*llo, he*lo, hel*o, hell*
```

Then create a map to map from key to its source. ex:

```js
const map = {
  '*ello': ['hello'],
  'h*llo': ['hello'],
  'he*lo': ['hello'],
  'hel*o': ['hello'],
  'hell*': ['hello'],
};
```

`search` function return true if

- key in map
- there are more than one source in `map[key]` or there is only one source but `map[key][0] !== word`.
