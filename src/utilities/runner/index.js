class Runner {
  constructor({ concurrency, fn }) {
    this.queue = [];
    this.concurrency = concurrency;
    this.fn = fn;
    this.nRunning = 0;
  }

  async run() {
    if (this.nRunning + 1 <= this.concurrency && this.queue.length) {
      this.nRunning += 1;
      await this.fn(this.queue.shift());
      this.nRunning -= 1;
      this.run();
    }
  }

  push(arg) {
    this.queue.push(arg);
    this.run();
  }
}

export default Runner;
