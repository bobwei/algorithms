/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.arr = [];
  this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (val in this.map) {
    return false;
  }
  this.arr.push(val);
  this.map[val] = this.arr.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!(val in this.map)) {
    return false;
  }
  const i = this.map[val];
  const j = this.arr.length - 1;
  this.arr[i] = this.arr[j];
  this.map[this.arr[i]] = i;
  this.arr.pop();
  delete this.map[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const index = Math.floor(Math.random() * this.arr.length);
  return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
