/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!(key in this.map)) {
    this.map[key] = [];
  }
  this.map[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!(key in this.map)) {
    return '';
  }
  const arr = this.map[key];
  const index = lowerBound(arr, timestamp, (obj) => obj[0]);
  if (index < arr.length && arr[index][0] === timestamp) {
    return arr[index][1];
  }
  if (index - 1 >= 0 && arr[index - 1][0] < timestamp) {
    return arr[index - 1][1];
  }
  return '';
};

function lowerBound(arr, target, getter) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > getter(arr[mid])) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
