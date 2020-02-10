var TweetCounts = function() {
  this.map = {};
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!(tweetName in this.map)) this.map[tweetName] = [];
  const index = lowerBound(this.map[tweetName], time);
  this.map[tweetName].splice(index, 0, time);
};

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
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

function getInterval(freq) {
  if (freq === 'minute') {
    return 60;
  }
  if (freq === 'hour') {
    return 60 * 60;
  }
  if (freq === 'day') {
    return 60 * 60 * 24;
  }
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
