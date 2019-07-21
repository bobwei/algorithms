function createRateLimiter(timesPerMin, onSuccess, onError) {
  const counter = new HitCounter();
  return () => {
    const timestamp = Math.floor(new Date().getTime() / 1000);
    if (counter.getHits(timestamp) + 1 <= timesPerMin) {
      counter.hit(timestamp);
      return true;
    }
    return false;
  };
}

export default createRateLimiter;

class HitCounter {
  constructor({ bucketSize = 60 } = {}) {
    this.bucketSize = bucketSize;
    this.bucket = [...new Array(bucketSize)].map(() => ({
      count: 0,
      timestamp: 0,
    }));
  }

  hit(timestamp) {
    const index = timestamp % this.bucketSize;
    if (this.bucket[index].timestamp !== timestamp) {
      this.bucket[index].count = 0;
      this.bucket[index].timestamp = timestamp;
    }
    this.bucket[index].count += 1;
  }

  getHits(timestamp) {
    return this.bucket
      .filter((row) => timestamp - row.timestamp < this.bucketSize)
      .map(({ count }) => count)
      .reduce((acc, cur) => acc + cur, 0);
  }
}
