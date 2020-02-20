# README

## Algorithm

Create an array of `[sentences[i], times[i]]` and sort it alphabetically.

When doing search, use binary search to find the start index with the same prefix. Then keep searching until meeting word not starting with the same prefix. At the same time, use priority queue to keep top 3 hottest words.

ex:

```js
const sentences = ['ax', 'abcd', 'abce', 'abcj', 'x', 'xy'];
const text = 'ab';
const index = lowerBound(sentences, text); // index === 1
// search from index to 4
```

When meeting '#', insert text to the sorted position.
