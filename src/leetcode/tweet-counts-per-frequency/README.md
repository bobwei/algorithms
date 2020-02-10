# README

## Algorithm

Maintain a map from tweetName to an array of times.

```js
const map = {
  tweetName1: [0, 10, 21, 40],
  tweetName2: [0, 0, 10, 10, 20, 25],
};
```

For `recordTweet`, we insert `time` to `map[tweetName]` to keep it sorted

For `getTweetCountsPerFrequency`, we iterate `t` from `startTime` to `endTime`. For each time, we find the index of `t`. So the counts in this interval is equal to `index` - `preIndex`. Then we update t by interval.

```js
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  if (!(tweetName in this.map)) {
    return [];
  }
  const output = [];
  let preIndex = lowerBound(this.map[tweetName], startTime);
  let t = startTime + getInterval(freq) - 1;
  while (t < endTime) {
    const index = upperBound(this.map[tweetName], t);
    output.push(index - preIndex);
    preIndex = index;
    t += getInterval(freq);
  }
  const index = upperBound(this.map[tweetName], endTime);
  output.push(index - preIndex);
  return output;
};
```
