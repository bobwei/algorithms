/* global Interval */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
  this.roots = {};
  this.intervals = {};
};

const find = (roots, v) => {
  let ptr = v;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, v1, v2) => {
  roots[v2] = v1;
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  if (this.roots[val] !== undefined) {
    return;
  }
  this.roots[val] = val;
  this.intervals[val] = new Interval(val, val);
  if (this.roots[val - 1] !== undefined) {
    const r1 = find(this.roots, val - 1);
    const r2 = find(this.roots, val);
    if (r1 !== r2) {
      this.intervals[r1].start = Math.min(this.intervals[r1].start, this.intervals[r2].start);
      this.intervals[r1].end = Math.max(this.intervals[r1].end, this.intervals[r2].end);
      delete this.intervals[r2];
      union(this.roots, r1, r2);
    }
  }
  if (this.roots[val + 1] !== undefined) {
    const r1 = find(this.roots, val);
    const r2 = find(this.roots, val + 1);
    if (r1 !== r2) {
      this.intervals[r1].start = Math.min(this.intervals[r1].start, this.intervals[r2].start);
      this.intervals[r1].end = Math.max(this.intervals[r1].end, this.intervals[r2].end);
      delete this.intervals[r2];
      union(this.roots, r1, r2);
    }
  }
};

/**
 * @return {Interval[]}
 */
SummaryRanges.prototype.getIntervals = function() {
  return Object.keys(this.intervals).map((key) => this.intervals[key]);
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = Object.create(SummaryRanges).createNew()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
