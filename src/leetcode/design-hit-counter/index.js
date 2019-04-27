/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
  this.bucketSize = 5 * 60;
  this.bucket = [...new Array(this.bucketSize)].map(() => ({
    count: 0,
    timestamp: 0,
  }));
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  const index = timestamp % this.bucketSize;
  if (this.bucket[index].timestamp !== timestamp) {
    this.bucket[index].count = 1;
    this.bucket[index].timestamp = timestamp;
    return;
  }
  this.bucket[index].count += 1;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  return this.bucket
    .filter((row) => timestamp - row.timestamp < this.bucketSize)
    .map(({ count }) => count)
    .reduce((acc, cur) => acc + cur, 0);
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
