class TaskQueue {
  constructor({ fn, concurrency = 2 }) {
    this.tasks = [];
    this.nRunning = 0;
    this.fn = fn;
    this.concurrency = concurrency;
  }

  push(arg) {
    this.tasks.push(arg);
    this._run();
  }

  async _run() {
    if (this.nRunning + 1 <= this.concurrency && this.tasks.length > 0) {
      this.nRunning += 1;
      await this.fn(this.tasks.shift());
      this.nRunning -= 1;
      this._run();
    }
  }
}

export default TaskQueue;
